const Booking = require('../models/Booking.model');
const Offday = require('../models/Offday.model');

// Helper: parse a date string safely and return a Date instance or null
const parseDateSafe = (dateInput) => {
    if (!dateInput) return null;
    // if it's already a Date
    if (dateInput instanceof Date) {
        return isNaN(dateInput.valueOf()) ? null : dateInput;
    }
    // Accept YYYY-MM-DD or other ISO strings
    const d = new Date(dateInput);
    return isNaN(d.valueOf()) ? null : d;
};

const createBooking = async (req, res) => {
    const { fullname, phone, date, timeSlot, price, paymentmethod } = req.body;
    if (!fullname || !phone || !date || !timeSlot || !price || !paymentmethod) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // parse and validate date
        const parsedDate = parseDateSafe(date);
        if (!parsedDate) return res.status(400).json({ message: 'Invalid date provided.' });

        // check if the date is an off day
        const isOffDay = await Offday.findOne({ date: parsedDate });
        if (isOffDay) {
            return res.status(400).json({ message: "Bookings are not allowed on off days." });
        }

        // --- CORE LOGIC CHANGE START ---

        // 1. Find ANY existing booking for the slot
        const existingBooking = await Booking.findOne({ date: parsedDate, timeSlot });

        if (existingBooking) {
            
            const isBkashPending = existingBooking.paymentmethod === 'bkash' && !existingBooking.trxid;
            const isExpired = (new Date() - existingBooking.createdAt) >= 15 * 60 * 1000;
            
            // Scenario 1: Slot is permanently booked (Not Bkash OR Bkash but confirmed)
            if (!isBkashPending) {
                return res.status(400).json({ message: "This time slot is permanently booked." });
            }

            // Scenario 2: Slot is temporarily held by a pending Bkash payment
            if (isBkashPending) {
                
                // If the pending Bkash booking has NOT expired (i.e., less than 15 minutes old)
                if (!isExpired) {
                    return res.status(400).json({ message: "This time slot is currently reserved (payment pending)." });
                }
                
                // If the pending Bkash booking HAS expired (15+ minutes old)
                // We allow the new booking to proceed.
                // NOTE: It is recommended to automatically mark the expired booking as 'Failed' 
                // or 'Canceled' in a cleanup process to keep the database tidy, but for 
                // booking creation logic, we simply ignore the expired entry.
            }
        }
        
        // --- CORE LOGIC CHANGE END ---

        // If no existing booking was found, or if the existing one was an expired Bkash pending booking, proceed.
        const newBooking = new Booking({
            fullname,
            phone,
            date: parsedDate,
            timeSlot,
            price,
            paymentmethod,
        });
        await newBooking.save();
        return res.status(201).json({ message: "Booking created successfully.", booking: newBooking });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error.", error: error.message });
    }
};

// TODO: implement completeBkashPayment function with logic of completing time withing 15 minutes
const completeBkashPayment = async (req, res) => {
    const { bookingId, trxid } = req.body;
    if (!bookingId || !trxid) {
        return res.status(400).json({ message: "Booking ID and transaction ID are required." });
    }
    try {
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found." });
        }
        if (booking.paymentmethod !== 'bkash') {
            return res.status(400).json({ message: "Payment method is not bkash." });
        }
        booking.trxid = trxid;
        await booking.save();
        return res.status(200).json({ message: "Payment completed successfully.", booking });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error.", error: error.message });
    }
};

const getBookingById = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found." });
        }
        return res.status(200).json({ booking });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error.", error: error.message });
    }
};

const deleteBookingById = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findByIdAndDelete(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found." });
        }
        return res.status(200).json({ message: "Booking deleted successfully." });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error.", error: error.message });
    }
};

const getBookings = async (req, res) => {
    // optional query params: date, timeSlot
    const { date, timeSlot } = req.query;
    try {
        const query = {};
        if (date) {
            const parsedDate = parseDateSafe(date);
            if (!parsedDate) return res.status(400).json({ message: 'Invalid date provided.' });
            query.date = parsedDate;
        }
        if (timeSlot) query.timeSlot = timeSlot;

        const bookings = await Booking.find(query);
        return res.status(200).json({ bookings });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error.", error: error.message });
    }
};

const getAvailableTimeSlots = async (req, res) => {
    const { date } = req.params;
    try {
        const parsedDate = parseDateSafe(date);
        if (!parsedDate) return res.status(400).json({ message: 'Invalid date provided.' });

        // check if the date is an off day
        const isOffDay = await Offday.findOne({ date: parsedDate });
        if (isOffDay) {
            return res.status(200).json({ availableTimeSlots: [] });
        }

        // get all bookings for the date filtering the ones which are not completed within 15 minutes for bkash payment method
        const bookings = await Booking.find({ date: parsedDate });
        const bookedSlots = bookings
            .filter(booking => !(booking.paymentmethod === 'bkash' && !booking.trxid && (new Date() - booking.createdAt) < 15 * 60 * 1000))
            .map(booking => booking.timeSlot);

        // all time slots from 1 to 24
        const allTimeSlots = Array.from({ length: 24 }, (_, i) => i + 1);
        const availableTimeSlots = allTimeSlots.filter(slot => !bookedSlots.includes(slot));

        return res.status(200).json({ availableTimeSlots });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error.", error: error.message });
    }
}

module.exports = {
    createBooking,
    getBookings,
    getBookingById,
    deleteBookingById,
    getAvailableTimeSlots,
    completeBkashPayment
};
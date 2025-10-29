const express = require('express');
const {
  createBooking,
  getBookings,
  getBookingById,
  deleteBookingById,
  getAvailableTimeSlots,
  completeBkashPayment
} = require('../controllers/booking.controller');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking management and payment operations
 */

/**
 * @swagger
 * /booking:
 *   post:
 *     summary: Create a new booking
 *     description: Creates a new booking after validating off days and existing bookings.
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullname
 *               - phone
 *               - date
 *               - timeSlot
 *               - price
 *               - paymentmethod
 *             properties:
 *               fullname:
 *                 type: string
 *                 example: "John Doe"
 *               phone:
 *                 type: string
 *                 example: "017XXXXXXXX"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2025-11-01"
 *               timeSlot:
 *                 type: integer
 *                 example: 10
 *               price:
 *                 type: number
 *                 example: 500
 *               paymentmethod:
 *                 type: string
 *                 enum: [bkash, cash]
 *                 example: "bkash"
 *     responses:
 *       201:
 *         description: Booking created successfully.
 *       400:
 *         description: Invalid input or unavailable slot.
 *       500:
 *         description: Internal server error.
 */
router.post('/', createBooking);

/**
 * @swagger
 * /booking:
 *   get:
 *     summary: Get all bookings
 *     description: Fetch all bookings. Optionally filter by date or timeSlot.
 *     tags: [Booking]
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter bookings by date (YYYY-MM-DD)
 *       - in: query
 *         name: timeSlot
 *         schema:
 *           type: integer
 *         description: Filter bookings by specific time slot (1–24)
 *     responses:
 *       200:
 *         description: Successfully fetched all bookings.
 *       500:
 *         description: Internal server error.
 */
router.get('/', getBookings);

/**
 * @swagger
 * /booking/{id}:
 *   get:
 *     summary: Get booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Booking ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking details returned successfully.
 *       404:
 *         description: Booking not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/:id', getBookingById);

/**
 * @swagger
 * /booking/{id}:
 *   delete:
 *     summary: Delete booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Booking ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking deleted successfully.
 *       404:
 *         description: Booking not found.
 *       500:
 *         description: Internal server error.
 */
router.delete('/:id', deleteBookingById);

/**
 * @swagger
 * /booking/available/{date}:
 *   get:
 *     summary: Get available time slots for a given date
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *           example: "2025-11-01"
 *         description: Date to check (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: List of available time slots returned successfully.
 *       500:
 *         description: Internal server error.
 */
router.get('/available/:date', getAvailableTimeSlots);

/**
 * @swagger
 * /booking/complete-bkash:
 *   post:
 *     summary: Complete bKash payment for a booking
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookingId
 *               - trxid
 *             properties:
 *               bookingId:
 *                 type: string
 *                 example: "67259a34f1a0a3cd9b654f32"
 *               trxid:
 *                 type: string
 *                 example: "TX123456789"
 *     responses:
 *       200:
 *         description: Payment completed successfully.
 *       400:
 *         description: Missing fields or invalid payment method.
 *       404:
 *         description: Booking not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/complete-bkash', completeBkashPayment);

module.exports = router;

// TODO: Implement following listed api endpoints
// POST /booking - Create a new booking
// GET /booking - Retrieve all bookings
// GET /booking/:id - Retrieve a specific booking by ID
// PUT /booking/:id - Update a specific booking by ID
// DELETE /booking/:id - Delete a specific booking by ID
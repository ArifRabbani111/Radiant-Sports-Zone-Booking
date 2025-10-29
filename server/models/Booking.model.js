const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    timeSlot:{
        type: Number, // 24-hour format 1-24, each representing an hour
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    paymentmethod:{
        type: String,
        enum: ['cash', 'bkash'],
        default: 'bkash',
        required: true
    },
    trxid:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Booking', BookingSchema);
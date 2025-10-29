const mongoose = require('mongoose');

const OffdaySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Offday', OffdaySchema);
const express = require('express');

const router = express.Router();

router.post('/book', (req, res) => {
    // Logic to handle booking a sports facility
    res.send('Booking created successfully');
});

router.get('/', (req, res) => {
    // Logic to retrieve all bookings
    res.send('List of all bookings');
});

module.exports = router;

// TODO: Implement following listed api endpoints
// POST /booking - Create a new booking
// GET /booking - Retrieve all bookings
// GET /booking/:id - Retrieve a specific booking by ID
// PUT /booking/:id - Update a specific booking by ID
// DELETE /booking/:id - Delete a specific booking by ID
const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
    // Logic to handle user login
    res.send('User logged in successfully');
});

router.post('/register', (req, res) => {
    // Logic to handle user registration
    res.send('User registered successfully');
});

module.exports = router;
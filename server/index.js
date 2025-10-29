const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Radiant Sports Zone Booking API');
});

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error:', error.message);
    });
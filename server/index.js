const express = require('express');
const mongoose = require('mongoose');
const { apiReference } = require("@scalar/express-api-reference");
const swaggerSpec = require('./swagger'); // <-- Import swagger spec
const authRoutes = require('./routes/auth.routes');
const bookingRoutes = require('./routes/booking.routes');
const offdayRoutes = require('./routes/offday.routes');
const config = require('./config/config');

const app = express();
const PORT = config.port;
const MONGO_URI = config.mongoURI;

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Radiant Sports Zone Booking API');
});

// API Routes
app.use('/auth', authRoutes);
app.use('/booking', bookingRoutes);
app.use('/offday', offdayRoutes);

// Scalar API Reference route
app.use(
  '/reference',
  apiReference({
    theme: 'saturn', // optional theme
    spec: {
      content: swaggerSpec, // provide the swagger spec directly
    },
  }),
);

// Optional: serve the raw OpenAPI spec
app.get('/openapi.json', (req, res) => {
  res.json(swaggerSpec);
});

// Database Connection
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

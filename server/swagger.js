const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Radiant Sports Zone Booking API',
      version: '1.0.0',
      description: 'API documentation for Radiant Sports Zone Booking System',
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', // Optional but nice for clarity
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'], // Scan your route files for annotations
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;

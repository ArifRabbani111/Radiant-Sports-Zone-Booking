const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 8000,
  mongoURI: process.env.MONGO_URI,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};

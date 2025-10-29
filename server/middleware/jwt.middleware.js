const config = require("../config/config");
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return jwt.verify(token, config.jwt.secret);
};

const validateJWT = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Authorization token is required." });
    }
    try {
        const decoded = verifyToken(token);
        if (!decoded.id) {
            return res.status(401).json({ message: "Invalid token." });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token." });
    }
};

module.exports = {
    validateJWT,
};
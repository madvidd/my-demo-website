// middleware/auth.js

const jwt = require('jsonwebtoken');

// Middleware to protect routes that require JWT authentication
const protect = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Expect 'Bearer <token>'
  
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the secret key
    req.user = decoded.user; // Attach user data to request object
    next(); // Continue to the next middleware or route
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = protect;

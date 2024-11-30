// middleware/auth.js
const jwt = require('jsonwebtoken');

// Middleware to protect routes, ensuring the user is authenticated
const protect = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    // If no token is found, return a 401 error
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the token using your JWT secret (replace 'your_jwt_secret' with your actual secret)
        const decoded = jwt.verify(token, 'your_jwt_secret');
        
        // Attach the decoded user information to the request object
        req.user = decoded;  

        // Continue to the next middleware or route handler
        next();
    } catch (err) {
        // If the token is invalid, return a 401 error
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = protect;

const jwt = require("jsonwebtoken");
const User = require("../../modules/auth/auth.model");
const { JWT_SECRET } = require("../config/env");

const authMiddleware = async (req, res, next) => {

  try {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "Invalid token"
      });
    }

    req.user = user;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Authentication failed"
    });

  }

};

module.exports = authMiddleware;
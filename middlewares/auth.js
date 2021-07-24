const config = require("config");
const jwt = require("jsonwebtoken");

const protectRoute = (req, res, next) => {
  // Get Token from the header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization Denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecretKey"));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid Token" });
  }
};

module.exports = protectRoute;

const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(400).json({ message: "Unauthorized" });
    }
    next();
  };
};

module.exports = authorizeRole;

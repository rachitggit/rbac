const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const router = express.Router();

//Admin routes
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Admin route" });
});

//Manager routes
router.get(
  "/manager",
  verifyToken,
  authorizeRoles("manager", "admin"),
  (req, res) => {
    res.json({ message: "Manager route" });
  }
);

//User routes
router.get(
  "/user",
  verifyToken,
  authorizeRoles("user", "manager", "admin"),
  (req, res) => {
    res.json({ message: "User route" });
  }
);

module.exports = router;

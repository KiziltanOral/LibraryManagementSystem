const express = require("express");
const userRoutes = require("./users");
const bookRoutes = require("./books");
const borrowingRoutes = require("./borrowings");
const router = express.Router();

router.use("/users", userRoutes);
router.use("/users", borrowingRoutes);
router.use("/books", bookRoutes);

module.exports = router;
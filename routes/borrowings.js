const express = require("express");
const { Borrowing, User, Book } = require("../models");
const validate = require("../middlewares/validate");
const borrowBookValidation = require("../validations/borrowValidation");
const returnBookValidation = require("../validations/returnValidation");
const updateBookScore = require("../helpers/updateBookScore");

const router = express.Router();

// Borrow a Book
router.post(
  "/:userId/borrow/:bookId",
  validate(borrowBookValidation),
  async (req, res) => {
    const { userId, bookId } = req.params;

    try {
      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ message: "User not found" });

      const book = await Book.findByPk(bookId);
      if (!book) return res.status(404).json({ message: "Book not found" });

      const existingBorrowing = await Borrowing.findOne({
        where: { userId, bookId, returnDate: null },
      });

      if (existingBorrowing) {
        return res.status(400).json({
          message: "This book is already borrowed by the user and not yet returned.",
        });
      }

      await Borrowing.create({ userId, bookId, borrowDate: new Date() });
      return res.status(204).send();
    } catch (err) {
      console.error("Error borrowing book:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Return a Book
router.post(
  "/:userId/return/:bookId",
  validate(returnBookValidation),
  async (req, res) => {
    const { userId, bookId } = req.params;
    const { score } = req.body;

    try {
      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ message: "User not found" });

      const book = await Book.findByPk(bookId);
      if (!book) return res.status(404).json({ message: "Book not found" });

      const borrowing = await Borrowing.findOne({
        where: { userId, bookId, returnDate: null },
      });

      if (!borrowing) {
        return res.status(400).json({ message: "No active borrowing found." });
      }

      borrowing.returnDate = new Date();
      borrowing.score = score;
      await borrowing.save();

      await updateBookScore(bookId);
      return res.status(204).send();
    } catch (err) {
      console.error("Error returning book:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

module.exports = router;

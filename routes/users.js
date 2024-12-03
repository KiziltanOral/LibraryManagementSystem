const express = require("express");
const { User, Borrowing, Book } = require("../models");
const router = express.Router();
const validate = require("../middlewares/validate");
const createUserSchema = require("../validations/createUserValidation");

// Create User (POST /users)
router.post("/", validate(createUserSchema), async (req, res) => {
  try {
    const { name } = req.body;
    await User.create({ name });
    return res.status(201).send();
  } catch (err) {
    console.error("Error creating user: ", err);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Get Users (GET /users)
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name"],
      order: [["id", "ASC"]],
    });
    return res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users: ", err);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Get User (GET /users/:id)
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const borrowings = await Borrowing.findAll({
      where: { userId: id },
      include: [{ model: Book, attributes: ["name"] }],
    });

    const books = {
      past: borrowings
        .filter((b) => b.returnDate !== null)
        .map((b) => ({
          name: b.Book.name,
          userScore: b.score,
        })),
      present: borrowings
        .filter((b) => b.returnDate === null)
        .map((b) => ({
          name: b.Book.name,
        })),
    };
    const response = {
      id: user.id,
      name: user.name,
      books,
    };
    
    return res.status(200).json(response);
  } catch (err) {
    console.error("Error fetching user: ", err);
    return res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;

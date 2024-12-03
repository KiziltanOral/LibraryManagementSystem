const express = require("express");
const {Book, Borrowing} = require("../models");
const router = express.Router();
const validate = require("../middlewares/validate");
const createBookSchema = require("../validations/createBookValidation");
const { where } = require("sequelize");

// Create Book (POST /books)
router.post("/", validate(createBookSchema), async (req, res) => {
    try {
        const {name } = req.body;
        await Book.create({ name });
        res.status(201).send();
    } catch (err) {
        console.error("Error creating book", err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Get Books (GET /books)
router.get("/", async (req, res) => {
    try {
        const books = await Book.findAll({
            attributes: ["id", "name"],
            order: [["id", "ASC"]],
        });
        res.status(200).json(books);
    } catch (err) {
        console.error("Error getting books", err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Get Book (GET /books/:id)
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try{
        const book = await Book.findByPk(id, {
            attributes: ["id", "name", "score"],
        });

        if(!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        
        const response = {
            id: book.id,
            name: book.name,
            score: book.score > 0 ? book.score : -1,
        };

        return res.status(200).json(response);

    } catch (err) {
        console.error("Error getting book", err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
const { Borrowing, Book } = require("../models");

const updateBookScore = async (bookId) => {
  try { 
    const ratings = await Borrowing.findAll({
      where: { bookId },
      attributes: ["score"],
      raw: true,
    }); 
 
    const validRatings = ratings
      .map((r) => r.score)
      .filter((score) => score !== null && score >= 1); 

    const averageScore =
      validRatings.length > 0
        ? validRatings.reduce((sum, score) => sum + score, 0) / validRatings.length
        : -1; 
 
    const [updated] = await Book.update(
      { score: averageScore.toFixed(2) },
      { where: { id: bookId } }
    );

    if (!updated) {
      console.error(`Book with ID ${bookId} not found or update failed.`);
      throw new Error(`Book with ID ${bookId} not found or update failed.`);
    } else {
      console.log(`Book score updated successfully for bookId ${bookId}`);
    }
  } catch (err) {
    console.error(`Error updating book score for bookId ${bookId}:`, err.message);
  }
};

module.exports = updateBookScore;

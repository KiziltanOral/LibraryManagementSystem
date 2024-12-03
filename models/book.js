module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      score: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: -1,
      },
    },
    {
      timestamps: false,
    }
  );

  Book.associate = (models) => {
    Book.hasMany(models.Borrowing, {
      foreignKey: "bookId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Book;
};

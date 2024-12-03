module.exports = (sequelize, DataTypes) => {
  const Borrowing = sequelize.define(
    "Borrowing",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      borrowDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      returnDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 1,
          max: 5,
        },
      },
    },
    {
      timestamps: false,
    }
  );

  Borrowing.associate = (models) => {
    Borrowing.belongsTo(models.User, { foreignKey: "userId" });
    Borrowing.belongsTo(models.Book, { foreignKey: "bookId" });
  };

  return Borrowing;
};

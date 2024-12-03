'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable("Books", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        score: {
          type: Sequelize.DECIMAL(5, 2),
          defaultValue: -1,
        },
     });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable("Books");
  }
};

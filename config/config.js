require("dotenv").config();

module.exports = {
  development: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialectOptions: {
      options: {
        enableArithAbort: true,  
        trustServerCertificate: true,  
      },
    },
  },
  test: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: `${process.env.DB_NAME}_test`,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialectOptions: {
      options: {
        enableArithAbort: true,
        trustServerCertificate: true,
      },
    },
  },
  production: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: `${process.env.DB_NAME}_prod`,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialectOptions: {
      options: {
        enableArithAbort: true,
        trustServerCertificate: true,
      },
    },
  },
};
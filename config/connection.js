// import the Sequalize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to out database, pass in your MySQL information for username and password
const sequalize = new Sequalize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequalize;
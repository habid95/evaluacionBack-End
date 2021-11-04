const { Sequelize } = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(
    database.data,
    database.username,
    database.password, {
        host: database.host,
        dialect: "mysql",
        port: 3308
    }
);

module.exports = sequelize;
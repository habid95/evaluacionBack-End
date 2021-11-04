const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class user extends Model {}

user.init({
    username: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    contrasena: DataTypes.STRING
}, {
    sequelize,
    modelName: "user"
});

module.exports = user;
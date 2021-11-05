const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');


class usuarios extends Model {}


usuarios.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    perfil_id: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    estatus: DataTypes.STRING,

    fecha_creacion: DataTypes.DATE,
    fecha_actualizacion: DataTypes.DATE,
    usuario_id_creacion: DataTypes.STRING,
    usuario_id_actualizacion: DataTypes.STRING
}, {
    sequelize,
    modelName: "usuarios",
    createdAt: false,
    updatedAt: false
});

module.exports = usuarios;
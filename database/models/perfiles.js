const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');


class perfiles extends Model {}


perfiles.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fecha_creacion: DataTypes.STRING,
    fecha_actualizacion: DataTypes.DATE,
    usuario_id_creacion: DataTypes.DATE,
    usuario_id_actualizacion: DataTypes.STRING,
    estatus: DataTypes.NUMBER
}, {
    sequelize,
    modelName: "perfiles",
    createAt: false,
    updateAt: false
});

module.exports = perfiles;
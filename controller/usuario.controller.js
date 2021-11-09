const User = require("../models/usuarios");



module.exports = {
    getAllUsers: (req, ress) => {
        User.findAll().then(users => {
            console.log("All users:", JSON.stringify(users));
            let res = JSON.stringify(users)
            ress.json(JSON.parse(res));
        });
    },
    validaUsuario: (req, res) => {
        User.findOne({
            where: {
                username: req.params.user,
                password: req.params.pass
            }
        }).then(result => {
            res.json(result);
        });
    },
    BuscarId: (req, ress) => {
        User.findByPk(req.params.id).then(user => {
            ress.json(user);
        })
    },
    saveUser: (req, ress) => {
        console.log(req.body.password);
        User.create({
            username: req.body.username,
            password: req.body.password,
            perfil_id: 1,
            correo: req.body.correo,
            telefono: req.body.telefono,
            // estatus: req.body.estatus,
            fecha_creacion: new Date(),
        }).then(user => {
                ress.json(user);
            },
            err => {
                ress.json(err);
            });
    },
    ModificarUser: (req, res) => {

        res.json(req.params.id);
        User.update({
            username: req.body.username,
            correo: req.body.correo,
            telefono: req.body.telefono,
            fecha_actualizacion: new Date(),
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        });
    },
    deletedUser: (req, res) => {
        User.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        });
    }
}
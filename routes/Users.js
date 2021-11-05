const express = require("express");
const router = express.Router();
const User = require("../database/models/usuarios");


//Validar usuario
router.get('/:user/:pass', (req, res) => {
    User.findOne({
        where: {
            username: req.params.user,
            password: req.params.pass
        }
    }).then(result => {
        res.json(result);
    });
});


router.get('/', (req, ress) => {
    User.findAll().then(users => {
        console.log("All users:", JSON.stringify(users));
        let res = JSON.stringify(users)
        ress.json(JSON.parse(res));
    });
});

router.get('/:id', (req, ress) => {
    User.findByPk(req.params.id).then(user => {
        ress.json(user);
    })
})

router.post('/', (req, ress) => {
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
})


router.patch('/:id', (req, res) => {

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
});

// //delete
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});


module.exports = router;
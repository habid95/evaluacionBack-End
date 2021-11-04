const express = require("express");
const router = express.Router();
const User = require("../database/models/user");



//create
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        correo: req.body.correo,
        telefono: req.body.telefono,
        contrasena: req.body.contrasena
    }).then(user => {
        res.json(user);
    });



});

//Validar usuario
router.get('/:user/:pass', (req, res) => {
    User.findOne({
        where: {
            username: req.params.user,
            contrasena: req.params.pass
        }
    }).then(result => {
        res.json(result);
    });
});


//read one
router.get('/:id', (req, res) => {
    User.findByPk(req.params.id).then(user => {
        res.json(user);
    })
});

//read all
router.get('/', (req, res) => {
    User.findAll().then(users => {
        res.json(users)
    });

    // res.json('hola');
});

// //update
router.patch('/:id', (req, res) => {
    User.update({
        username: req.body.username,
        correo: req.body.correo,
        telefono: req.body.telefono,
        contrasena: req.body.contrasena
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
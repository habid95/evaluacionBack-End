const express = require("express");
const router = express.Router();
const User = require("../models/usuarios");
const userController = require("../controller/usuario.controller");



//Validar usuario
router.get('/:user/:pass', userController.validaUsuario);


router.get('/', userController.getAllUsers);

router.get('/:id', userController.BuscarId)

router.post('/', userController.saveUser)


router.patch('/:id', userController.ModificarUser);

// //delete
router.delete('/:id', userController.deletedUser);


module.exports = router;
const expres = require("express");
const router = expres.Router();
const perfil = require("../database/models/perfiles");



//read all
router.get('/', (req, res) => {
    perfil.findAll().then(users => {
        res.json(users)
    });

    res.json('hola');
});


// router.get('/:id', (req, res) => {
//     perfil.findByPk(req.params.id).then(per => {
//         res.json(per)
//     }).catch(err => {
//         res.json(err)
//     })
// });

module.exports = router
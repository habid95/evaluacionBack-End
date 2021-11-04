const express = require('express')
const app = express()
const port = 3000

const sequalize = require('./database/db');
// const User = require('./database/models/user');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {

    // User.findAll().then(users => {
    //     res.json(users)
    // })

    // User.create({
    //     username: "kevin",
    //     correo: "habid.95@hotmail.com",
    //     telefono: "33-10-48-94-73",
    //     contrasena: "habid.95"
    // }).then(user => {
    //     res.json(user);
    // })

    res.send('Hello World!')
});

app.use('/api', require('./routes/Users'))
    // app.use('/api', require('./routes/perfil'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
        // conectarme a la BD

    sequalize.authenticate().then(() => {
        console.log("nos conectamos a la base de datos")
    }).catch(err => {
        console.log("se produjo un error: " + err)
    })
})
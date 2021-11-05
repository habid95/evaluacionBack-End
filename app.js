const express = require('express')
const app = express()
const port = 3000

const sequalize = require('./database/db');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/Users'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
        // conectarme a la BD

    sequalize.authenticate().then(() => {
        console.log("nos conectamos a la base de datos")
    }).catch(err => {
        console.log("se produjo un error: " + err)
    })
})
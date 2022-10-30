import express from "express";
import rutas from "./rutas/index.js"; 
import db from "./config/db.js"

const app = express();

db.authenticate()
    .then(() => console.log("Conexion Exitosa"))
    .catch(error => console.log(error));

const port = process.env.PORT || 2000;

app.set("view engine", "pug");

//middleware
app.use((req, res, next) => {
    const ano = new Date();
    res.locals.tiempo = " " + ano.getFullYear();
    return next();
})

//Agregar parser body para obtener los datos de un formulario
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", rutas);

app.listen(port, () => {
    console.log(`El Servidor ha iniciado en el puerto ` + port);
})
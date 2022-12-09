import express from 'express';
import fileUpload from 'express-fileupload';
import rutas from "./rutas/index.js";
import db from "./config/db.js";
import session from "express-session";
import { nanoid } from "nanoid";
import { Credenciales } from './models/Credenciales.js';

const app = express();

db.authenticate()
    .then(() => console.log("Conexion Exitosa"))
    .catch(error => console.log(error));

const port = process.env.PORT || 2000;

app.set("view engine", "pug");

//definiendo la sesion
app.use(session({
    secret:nanoid(),
    resave:true,
    saveUninitialized:true
}));

app.use(fileUpload());

app.use(express.static("public"));

//Agregar parser body para obtener los datos de un formulario
app.use(express.urlencoded({ extended: true }));

//midleware
app.use(async(req, res, next) => {
    const ano = new Date();
    res.locals.tiempo = " " + ano.getFullYear();
    console.log(req.url);

    let usuariosDb = [];

    let usuariosDatos = {
        usuarioDb: "",
        claveDb: "",
        id_rol: "",
    }

    const usuarios = await Credenciales.findAll({
        attributes : ["id_credencial", "usuario", "clave", "id_rol"]
    });

    usuarios.map(usuario => {
        usuariosDatos = {
            usuarioDb: usuario.usuario,
            claveDb: usuario.clave,
            id_rol: usuario.id_rol,
        }
        usuariosDb.push(usuariosDatos)
    })
    try{
        if(req.url==="/credenciales"){
            const {
                usuario,
                clave
            } = req.body;
            
            if(usuario=== usuariosDb[0].usuarioDb && clave=== usuariosDb[0].claveDb){
                console.log("Entrada 1")        
                req.session.nombre="Administrador";
                req.session.rol="adm";
                console.log(req.session.nombre + " "+req.session.rol)
                res.render("inicio",{
                    pagina:"datos",
                    usuario: req.session.nombre,
                    rol: req.session.rol,
                })            
            }else if(usuario=== usuariosDb[1].usuarioDb && clave=== usuariosDb[1].claveDb){
                console.log("Entrada 2")        
                req.session.nombre="Usuario";
                req.session.rol="usr";
                console.log(req.session.nombre + " "+req.session.rol)
                res.render("inicio",{
                    pagina:"datos",
                    usuario:req.session.nombre, 
                    rol: req.session.rol,         
                })      
            } else {
                res.render("login",{
                    pagina:"Credenciales"           
                });  
            }
        }else{
            if(req.session.rol===undefined){
                console.log("no existe......1 "+req.session.rol);
                res.render("login",{
                    pagina:"Credenciales"           
                });   
            }else{
                console.log("si existe......2 "+req.session.rol);
             
                return next();
            }
            
        }
        
    }catch(e){
        console.log("no existe......")
        res.render("login",{
            pagina:"Credenciales"           
        });
    }
    
    
});

app.use("/", rutas);

app.listen(port, () => {
    console.log(`El Servidor ha iniciado en el puerto ` + port);
})
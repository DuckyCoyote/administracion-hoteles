import {Hoteles} from "../models/Hoteles.js"
import {gerentes} from "../models/Gerentes.js"
import  Catalogo from "../models/Catalogo.js";
import { misDatos } from "../models/Datos.js"
import db from "../config/db.js";

const paginaInicio = (req,res) => {
    res.render("login",{
        pagina: "Login",
    });
}

const paginaGerentes = async (req, res) => {
    const gerentesCont = await gerentes.findAll({
        attributes : ["id_grt", "nombre", "ap_paterno", "ap_materno", "telefono", "img_ruta"]
    });
    res.render("gerentes", {
        pagina: "Gerentes",
        gerentes: gerentesCont,
        rol: req.session.rol,
    });
}


const paginaHoteles = async (req, res) => {
    const hoteles = await Hoteles.findAll({
        attributes : ["id_htl", "nombre", "direccion", "telefono", "correo"]
    });

    // const idGrtSel = await db.query(
    //     "SELECT gerentes.id_grt as dato1 FROM gerentes LEFT JOIN hoteles ON gerentes.id_grt = hoteles.id_grt WHERE hoteles.id_grt IS NULL"
    //     , {
    //         model: misDatos,
    //         mapToModel: true,
    //         rol: req.session.rol,
    // }    
    // )

    res.render("hoteles", {
        pagina: "Hoteles",
        rol: req.session.rol,
        hoteles,
    });
}

const cerrarSesion = (req, res) => {
    req.session.destroy()
    res.render("login",{
        pagina: "Credenciales",
    });
}

const paginaHabitaciones = async (req, res) => {
    const catalogo = await Catalogo.findAll({
        attributes: ["nombre_hbt", "id_hbt", "id_htl", "precio"]
    })

    res.render("habitaciones", {
        pagina: "Catalogo",
        catalogo,
        rol: req.session.rol
    })
}

export {
    paginaInicio,
    paginaGerentes,
    paginaHoteles,
    paginaHabitaciones,
    cerrarSesion
}

import { Habitaciones } from "../models/Habitaciones.js";
import db from "../config/db.js";
import { misDatos } from "../models/Datos.js"
let errores = [];
const agregarHabitaciones = async (req, res) => {
    const { piso, nombre, refrigerador, id_htl } = req.body;
    errores = validarForm( piso, nombre, refrigerador, id_htl);
    if (errores.length > 0) {
        muestraErrores(req, res, errores, piso, nombre, refrigerador, id_htl);
    } else {
        //Almacenar en la base de datos
        try {
            await Habitaciones.create({
                piso,
                nombre,
                refrigerador,
                id_htl
            });
            res.redirect('/habitaciones');
        }catch (error) {
            console.log(error);
        }
    }
}

const editarHabitaciones = async (req, res) => {
    const { id_hbt, piso, nombre, refrigerador, id_htl } = req.body;
    errores = validarForm(piso, nombre, refrigerador, id_htl);    
    if (errores.length > 0) {
        muestraErrores(req, res, errores, piso, nombre, refrigerador, id_htl);
    } else {
        //Almacenar en la base de datos
        try {
            await Habitaciones.update({
                piso,
                nombre,
                refrigerador,
                id_htl
            }, {
                where: {
                    id_hbt
                }
            });
            res.redirect('/habitaciones'); 
        }catch (error) {
            console.log(error);
        }
    }
}

const eliminarHabitaciones = async (req, res) => {
    const {id_hbt} = req.body;
    Habitaciones.destroy({
        where: {
            id_hbt
        }
    });
    res.redirect('/habitaciones');
}

 function validarForm(piso, nombre, refrigerador, id_htl) {
    const errores = [];
    if (piso.trim() === "") {
        errores.push({ mensaje: "El piso no debe ser vacio" });
    }
    if (nombre.trim() === "") {
        errores.push({ mensaje: "El nombre de la habitacion no debe ser vacio" });
    }
    if (refrigerador.trim() === "") {
        errores.push({ mensaje: "El refrigerador no debe ser vacio" });
     }
     if (id_htl.trim() === "") {
         errores.push({ mensaje: "El Id Hotel no puede ser vacio" });
     }

    return errores;
}

const muestraErrores = async(req, res, errores, id_hbt, piso, nombre, refrigerador, id_htl) => {
    const habitacionesCont = await Habitaciones.findAll({
        attributes : ["id_hbt", "piso", "nombre", "refrigerador", "id_htl"]
    });
    const idHtlSel = await db.query(
        "SELECT id_htl FROM hoteles"
        , {
            model: misDatos,
            mapToModel: true
    })

    res.render("habitaciones", {
        pagina: "Habitaciones",
        habitaciones: habitacionesCont,
        errores,
        id_hbt,
        piso,
        nombre,
        refrigerador,
        id_htl,
        idHtlSel
    });
}
export { agregarHabitaciones, editarHabitaciones, eliminarHabitaciones };
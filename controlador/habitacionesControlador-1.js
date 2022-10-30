import { habitaciones } from "../models/Habitaciones.js";
let errores = [];
const agregarHabitacion = async (req, res) => {
    const { id_hbt, piso, nombre, refrigerador, id_htl } = req.body;
    errores = validarForm(id_hbt, piso, nombre, refrigerador, id_htl);
    if (errores.length > 0) {
        muestraErrores(req, res, errores, id_hbt, piso, nombre, refrigerador, id_htl);
    } else {
        //Almacenar en la base de datos
        try {
            await habitaciones.create({
                id_hbt,
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
    errores = validarForm(id_hbt, piso, nombre, refrigerador, id_htl);
    if (errores.length > 0) {
        muestraErrores(req, res, errores, id_hbt, piso, nombre, refrigerador, id_htl);
    } else {
        //Almacenar en la base de datos
        try {
            await habitaciones.update({
                id_hbt,
                piso,
                nombre,
                refrigerador,
                id_htl
            }, {
                where: {
                    id_grt
                }
            });
            res.redirect('/habitaciones'); 
        }catch (error) {
            console.log(error);
        }
    }
}

const eliminarHabitaciones = async (req, res) => {
    const {id_htl} = req.body;
    gerentes.destroy({
        where: {
            id_htl
        }
    });
    res.redirect('/habitaciones');
}

 function validarForm(id_hbt, piso, nombre, refrigerador, id_htl) {
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

    return errores;
}

const muestraErrores = async(req, res, errores, id_hbt, piso, nombre, refrigerador, id_htl) => {
    const habitacionesCont = await habitaciones.findAll({
        attributes : ["id_hbt", "pido", "nombre", "refrigerador", "id_htl"]
    });

    res.render("habitaciones", {
        pagina: "Habitaciones",
        habitaciones: habitacionesCont,
        errores,
        piso,
        nombre,
        refrigerador
    });
}
export { agregarHabitacion, editarHabitaciones, eliminarHabitaciones };
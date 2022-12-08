import { gerentes } from "../models/Gerentes.js";
let errores = [];
const agregarGerente = async (req, res) => {
    const { nombre, ap_paterno, ap_materno, telefono } = req.body;
    errores = validarForm(nombre, ap_paterno, ap_materno, telefono);
    if (errores.length > 0) {
        muestraErrores(req, res, errores, nombre, ap_paterno, ap_materno, telefono);
    } else {
        //Almacenar en la base de datos
        try {
            await gerentes.create({
                nombre,
                ap_paterno,
                ap_materno,
                telefono
            });
            res.redirect('/gerentes');
        }catch (error) {
            console.log(error);
        }
    }
}

const editarGerente = async (req, res) => {
    const { id_grt, nombre, ap_paterno, ap_materno, telefono } = req.body;
    errores = validarForm(nombre, ap_paterno, ap_materno, telefono);
    if (errores.length > 0) {
        muestraErrores(req, res, errores, nombre, ap_paterno, ap_materno, telefono);
    } else {
        //Almacenar en la base de datos
        try {
            await gerentes.update({
                nombre,
                ap_paterno,
                ap_materno,
                telefono
            }, {
                where: {
                    id_grt
                }
            });
            res.redirect('/gerentes');
        }catch (error) {
            console.log(error);
        }
    }
}

const eliminarGerente = async (req, res) => {
    const {id_grt} = req.body;
    gerentes.destroy({
        where: {
            id_grt
        }
    });
    res.redirect('/gerentes');
}

 function validarForm(nombre, ap_paterno, ap_materno, telefono) {
    const errores = [];
    if (nombre.trim() === "") {
        errores.push({ mensaje: "El nombre no debe ser vacio" });
    }
    if (ap_paterno.trim() === "") {
        errores.push({ mensaje: "El apellido paterno no debe ser vacio" });
    }
    if (ap_materno.trim() === "") {
        errores.push({ mensaje: "El apellido materno no debe ser vacio" });
    }
    if (telefono.trim() === "") {
        errores.push({ mensaje: "El telefono no debe ser vacio" });
     }
    if (telefono.length > 10) {
        errores.push({ mensaje: "El telefono debe ser de 10 digitos" });
    }

    return errores;
}

const muestraErrores = async(req, res, errores, nombre, ap_paterno, ap_materno, telefono) => {
    const gerentesCont = await gerentes.findAll({
        attributes : ["id_grt", "nombre", "ap_paterno", "ap_materno", "telefono"]
    });

    res.render("gerentes", {
        pagina: "Gerentes",
        gerentes: gerentesCont,
        errores,
        nombre,
        ap_paterno,
        ap_materno,
        telefono
    });
}
export { agregarGerente, editarGerente, eliminarGerente };
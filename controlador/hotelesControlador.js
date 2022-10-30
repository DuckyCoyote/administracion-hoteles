import { Hoteles } from "../models/Hoteles.js";
import { gerentes } from "../models/Gerentes.js";
import db from "../config/db.js";
import { misDatos } from "../models/Datos.js";
let errores = [];
const agregarHotel = async (req, res) => {
    const {nombre, direccion, telefono, correo, id_grt} = req.body;
    errores = validarForm(nombre, direccion, telefono, correo, id_grt);
    if (errores.length > 0) {
        muestraErrores(req, res, errores, nombre, direccion, telefono, correo, id_grt);
    } else {
        //Almacenar en la base de datos
        try {
            await Hoteles.create({
                nombre,
                direccion,
                telefono,
                correo,
                id_grt
            });
            res.redirect('/hoteles');
        }catch (error) {
            console.log(error);
        }
    }
}

const editarHotel = async (req, res) => {   
    const { id_htl, nombre, direccion, telefono, correo, id_grt } = req.body;
    errores = validarForm(nombre, direccion, telefono, correo, id_grt);
    if (errores.length > 0) {
        muestraErrores(req, res, errores, nombre, direccion, telefono, correo, id_grt);
    } else {
        console.log(nombre, direccion, telefono, correo, id_grt)
        //Almacenar en la base de datos
        try {
            await Hoteles.update({
                nombre,
                direccion,
                telefono,
                correo,
                id_grt
            }, {
                where: {
                    id_htl           
                }
            });
            res.redirect('/hoteles'); 
        }catch (error) {
            console.log(error);
        }
    }
}

const eliminarHotel = async (req, res) => {
    const {id_htl, id_grt} = req.body;
    Hoteles.destroy({
        where: {
            id_htl          
        }
    });
    gerentes.destroy({
        where: {
            id_grt
        }
    })
    res.redirect('/hoteles');
}

 function validarForm(nombre, direccion, telefono, correo, id_grt) {
    const errores = [];
    if (nombre.trim() === "") {
        errores.push({ mensaje: "El nombre no debe ser vacio" });
    }
    if (direccion.trim() === "") {
        errores.push({ mensaje: "La direccion no debe ser vacio" });
    }
    if (telefono.trim() === "") {
        errores.push({ mensaje: "El telefono no debe ser vacio" });
    }
    if (correo.trim() === "") {
        errores.push({ mensaje: "El correo no debe ser vacio" });
     }
    if (id_grt === "") {
        errores.push({ mensaje: "El Id Gerente no debe ser vacio" });
    }

    return errores;
}

const muestraErrores = async(req, res, errores, nombre, direccion, telefono, correo, id_grt) => {
    const hotelesCont = await Hoteles.findAll({
        attributes : ["nombre", "direccion", "telefono", "correo", "id_grt"]
    });

    const idGrtSel = await db.query(
        "SELECT gerentes.id_grt as dato1 FROM gerentes LEFT JOIN hoteles ON gerentes.id_grt = hoteles.id_grt WHERE hoteles.id_grt IS NULL"
        , {
            model: misDatos,
            mapToModel: true
    }    
    )

    res.render("hoteles", {
        pagina: "Hoteles",
        hoteles: hotelesCont,
        idGrtSel,
        errores,
        nombre,
        direccion,
        telefono,
        correo,
        id_grt
    });
}
export { agregarHotel, editarHotel, eliminarHotel };
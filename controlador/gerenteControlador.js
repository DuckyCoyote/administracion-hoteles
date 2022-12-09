import express from "express";
import fileUpload from "express-fileupload";
const app = express();
import { gerentes } from "../models/Gerentes.js";

app.use(fileUpload());

let errores = [];
const agregarGerente = async (req, res) => {

    const subirFoto = () => {
        const { img_ruta } = req.files;

        // Move the uploaded image to our upload folder
        img_ruta.mv('./public/uploads/' + img_ruta.name);
    }

    const {
        nombre,
        ap_paterno,
        ap_materno,
        telefono,
        id_htl,
    } = req.body;
    const { img_ruta } = req.files;
    const img_rt = img_ruta.name
    console.log(nombre, ap_paterno, ap_materno, telefono, id_htl, img_rt)
    errores = validarForm(nombre, ap_paterno, ap_materno, telefono, img_rt);
    if (errores.length > 0) {
        muestraErrores(
            req,
            res,
            nombre,
            ap_paterno,
            ap_materno,
            telefono,
            id_htl,
            img_rt
        );
    } else {
        //Almacenar en la base de datos
        try {
            await gerentes.create({
                nombre,
                ap_paterno,
                ap_materno,
                telefono,
                id_htl,
                img_ruta: img_rt,
            });
            res.redirect("/gerentes");
        } catch (error) {
            console.log(error);
        }
        subirFoto();
    }
};

const editarGerente = async (req, res) => {
    const {
        id_grt,
        nombre,
        ap_paterno,
        ap_materno,
        telefono,
        id_htl,
        img_ruta,
    } = req.body;
    errores = validarForm(
        nombre,
        ap_paterno,
        ap_materno,
        telefono,
        id_htl,
        img_ruta
    );
    if (errores.length > 0) {
        muestraErrores(
            nombre,
            ap_paterno,
            ap_materno,
            telefono,
            id_htl,
            img_ruta
        );
    } else {
        //Almacenar en la base de datos
        try {
            await gerentes.update(
                {
                    nombre,
                    ap_paterno,
                    ap_materno,
                    telefono,
                    id_htl,
                    img_ruta,
                },
                {
                    where: {
                        id_grt,
                    },
                }
            );
            res.redirect("/gerentes");
        } catch (error) {
            console.log(error);
        }
    }
};

const eliminarGerente = async (req, res) => {
    const { id_grt } = req.body;
    gerentes.destroy({
        where: {
            id_grt,
        },
    });
    res.redirect("/gerentes");
};

function validarForm(
    nombre,
    ap_paterno,
    ap_materno,
    telefono,
    id_htl,
    id_hbt,
    img_rt
) {
    const errores = [];
    if (nombre === "") {
        errores.push({ mensaje: "El nombre no debe ser vacio" });
    }
    if (ap_paterno === "") {
        errores.push({ mensaje: "El apellido paterno no debe ser vacio" });
    }
    if (ap_materno === "") {
        errores.push({ mensaje: "El apellido materno no debe ser vacio" });
    }
    if (telefono === "") {
        errores.push({ mensaje: "El telefono no debe ser vacio" });
    }
    if (telefono === "") {
        errores.push({ mensaje: "El telefono debe ser de 10 digitos" });
    }
    if (id_htl === "") {
        errores.push({ mensaje: "El ID Hotel no debe ser vacio" });
    }
    if (id_hbt === "") {
        errores.push({ mensaje: "El ID Habitacion no debe ser vacio" });
    }
    if (img_rt === "") {
        errores.push({ mensaje: "Debe Seleccionar una imagen" });
    }

    return errores;
}

const muestraErrores = async (
    req,
    res,
    errores,
    nombre,
    ap_paterno,
    ap_materno,
    telefono,
    id_htl,
    img_ruta
) => {
    const gerentesCont = await gerentes.findAll({
        attributes: [
            "id_grt",
            "nombre",
            "ap_paterno",
            "ap_materno",
            "telefono",
            "id_htl",
            "img_ruta",
        ],
    });

    res.render("gerentes", {
        pagina: "Gerentes",
        gerentes: gerentesCont,
        errores,
        nombre,
        ap_paterno,
        ap_materno,
        telefono,
        id_htl,
        img_ruta,
    });
};
export { agregarGerente, editarGerente, eliminarGerente };

import Sequelize from "sequelize";
import db from "../config/db.js";
export const ImgHotel = db.define(
    "img_hoteles",
    {
        id_img_htl: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_htl: {
            type: Sequelize.INTEGER,
        },
        img_ruta: {
            type: Sequelize.INTEGER,
        },
    },
    { timestamps: false }
);

export default Habitaciones;

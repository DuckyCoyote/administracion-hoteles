import Sequelize from "sequelize";
import db from "../config/db.js";
export const Habitaciones = db.define(
    "tipoHabitacion",
    {
        id_hbt: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: Sequelize.STRING,
        },
        img_ruta: {
            type: Sequelize.INTEGER,
        },
    },
    { timestamps: false }
);

export default Habitaciones;

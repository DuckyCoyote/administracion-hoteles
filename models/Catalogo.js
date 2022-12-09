import Sequelize from "sequelize";
import db from "../config/db.js";
import Habitaciones from "./Habitaciones.js";
import Hoteles from "./Hoteles.js";

export const Catalogo = db.define(
    "catalogo",
    {
        nombre_hbt: {
            type: Sequelize.STRING,
        },
        id_hbt: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_htl: {
            type: Sequelize.INTEGER,
        },
        precio: {
            type: Sequelize.INTEGER,
        },
    },
    { timestamps: false }
);
Catalogo.hasOne(Habitaciones, {
    foreignKey: {
        name: "id_hbt",
    },
});
Catalogo.hasOne(Hoteles, {
    foreignKey: {
        name: "id_htl",
    },
});

export default Catalogo;

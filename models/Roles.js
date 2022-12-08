import Sequelize from "sequelize";
import db from "../config/db.js";

export const Roles = db.define('roles', {

    id_rol: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rol: {
        type:Sequelize.STRING
    },
    ident:{
        type:Sequelize.STRING
    }
},
{ timestamps: false }
);
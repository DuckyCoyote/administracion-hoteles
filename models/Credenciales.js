import Sequelize from "sequelize";
import {Roles} from "./Roles.js";
import db from "../config/db.js";

export const Credenciales = db.define('credenciales', {

    id_credencial: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    usuario: {
        type:Sequelize.STRING
    },
    clave:{
        type:Sequelize.STRING
    },
    id_rol:{
        type:Sequelize.INTEGER
    }
},
{ timestamps: false }
);
Credenciales.hasOne(Roles, {
foreignKey: {
  name: "id_rol",
},
});
import Sequelize from "sequelize";
import db from "../config/db.js";
import Hoteles from "../models/Hoteles.js"

export const gerentes = db.define('gerentes', {

    id_grt: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type:Sequelize.STRING
    },
    ap_paterno:{
        type:Sequelize.STRING
    },
    ap_materno:{
        type:Sequelize.STRING
    },
    telefono:{
        type:Sequelize.STRING
    },
    id_htl:{
        type:Sequelize.INTEGER
    }
},
{ timestamps: false }
);
gerentes.hasOne(Hoteles, {
foreignKey: {
  name: "id_grte",
},
});

Hoteles.belongsTo(gerentes, {
foreignKey: {
  name: "id_grt",
},
});
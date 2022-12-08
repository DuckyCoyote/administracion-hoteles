import Sequelize from "sequelize";
import db from "../config/db.js";
import habitaciones from "../models/Habitaciones.js"

export const Hoteles = db.define('hoteles', {

    id_htl: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type:Sequelize.STRING
    },
    direccion:{
        type:Sequelize.STRING
    },
    telefono:{
        type:Sequelize.STRING
    },
    correo:{
        type:Sequelize.STRING
    },
    id_grt:{
        type:Sequelize.INTEGER
    },
},
{ timestamps: false }
);
Hoteles.hasMany (habitaciones,{
    foreignKey:'id_hotel'
    });
      
habitaciones.belongsTo(Hoteles, {
    foreignKey: {
        name: "id_hotel",
    },
});

export default Hoteles;
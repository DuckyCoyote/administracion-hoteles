import express from "express";
import { paginaInicio, paginaHoteles, paginaGerentes, paginaHabitaciones, cerrarSesion } from "../controlador/paginasControlador.js"
import { agregarGerente, editarGerente, eliminarGerente } from "../controlador/gerenteControlador.js";
import { agregarHotel, editarHotel, eliminarHotel } from "../controlador/hotelesControlador.js";
import { agregarHabitaciones, editarHabitaciones, eliminarHabitaciones } from "../controlador/habitacionesControlador.js";
const rutas = express.Router();
rutas.get("/cerrarsesion", cerrarSesion);
rutas.get("/", paginaInicio);
rutas.get("/hoteles", paginaHoteles);
rutas.get("/gerentes", paginaGerentes);
rutas.get("/habitaciones", paginaHabitaciones);
rutas.post("/agregarGerentes", agregarGerente);
rutas.post("/editarGerentes", editarGerente);
rutas.post("/eliminarGerentes", eliminarGerente)
rutas.post("/agregarHoteles", agregarHotel);
rutas.post("/editarHotel", editarHotel);
rutas.post("/eliminarHoteles", eliminarHotel);
rutas.post("/agregarHabitaciones", agregarHabitaciones);
rutas.post("/editarHabitaciones", editarHabitaciones)
rutas.post("/eliminarHabitaciones", eliminarHabitaciones)

export default rutas;


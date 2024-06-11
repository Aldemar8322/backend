import express from "express";
import cors from 'cors';
import morgan from "morgan";
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";
import enrutadorInicioSesion from "./rutas/rutaInicioSesion.js";

const servidor = express();

servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use("/usuarios", enrutadorUsuarios);
servidor.use("/inicio-sesion", enrutadorInicioSesion);

servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
})

export default servidor;
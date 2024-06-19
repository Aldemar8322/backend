import path from 'path';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import enrutadorUsuarios from './rutas/rutaUsuarios.js';
import enrutadorInicioSesion from './rutas/rutaInicioSesion.js';
import enrutadorGorras from './rutas/rutaGorras.js';

const servidor = express();

servidor.use(cors());
servidor.use(express.json());
servidor.use(morgan('dev'));
servidor.use('/usuarios', enrutadorUsuarios);
servidor.use('/inicio-sesion', enrutadorInicioSesion);
servidor.use('/gorras', enrutadorGorras);
servidor.use('/imagenes', express.static(path.resolve('imagenes')));

servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send('No encontrado');
});

export default servidor;
import bcryptjs from 'bcryptjs';
import { generarToken } from '../ayudas/funciones.js';
import ModeloUsuario from "../modelos/modeloUsuario.js";

const controladorInicioSesion = {
    iniciarSesion: async (solicitud,respuesta) => {
        try {
            const {username, password} = solicitud.body;
            const usuarioEncontrado = await ModeloUsuario.findOne({
                correoElectronico: username,
            });
            const contraseniaValidada = await bcryptjs.compare(
                password,
                usuarioEncontrado.contrasenia
            );
            if (contraseniaValidada) {
                const token = await generarToken({
                    id: usuarioEncontrado._id,
                    name: usuarioEncontrado.nombre,
                });
                respuesta.json({
                    resultado: 'Bien',
                    mensaje: 'Acceso permitido',
                    datos: token,
                })
                
            } else {
                respuesta.json({
                    resultado: 'mal',
                    mensaje: 'Acceso denegado',
                    datos: null
                });
            }
        }   catch (error) {
            respuesta.json({
                resultado: 'mal',
                mensaje: 'Ocurrio un error al iniciar sesion',
                datos: error,
            });
        }
    },
};

export default controladorInicioSesion;
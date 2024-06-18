import multer from "multer";
import ModeloDesayunos from '../modelos/modeloDesayunos.js';

const ControladorDesayunos= {
    crearDesayuno: async (solicitud, respuesta) => {
        try {
          const almacenamiento = multer.diskStorage({
            destination: 'imagenes',
            filename: (req, file, cb) => {
              cb(null, file.originalname);
            },
          });
          const carga = multer({ storage: almacenamiento }).single('imagen');
          carga(solicitud, respuesta, async (error) => {
            if (error) {
              respuesta.json({
                resultado: 'mal',
                mensaje: 'ocurrió un error al subir imagen desayuno',
                datos: null,
              });
            } else {
              const nuevoDesayuno = new ModeloDesayunos({
                nombre: solicitud.body.nombre,
                color: solicitud.body.color,
                talla: solicitud.body.talla,
                disponible: solicitud.body.disponible,
                existencias: solicitud.body.existencias,
                imagen: {
                  data: solicitud.file.filename,
                  contentType: 'image/png',
                },
              });
              const desayunoCreado = await nuevoDesayuno.save();
              if (desayunoCreado._id) {
                respuesta.json({
                  resultado: 'bien',
                  mensaje: 'desayuno creado',
                  datos: desayunoCreado._id,
                });
              }
            }
          });
        } catch (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al crear desayuno',
            datos: error,
          });
        }
      },
      leerDesayuno: async (solicitud, respuesta) => {
        try {
          respuesta.json({
            resultado: 'bien',
            mensaje: 'desayuno leído',
            datos: null,
          });
          /* const usuarioEncontrado = await ModeloUsuario.findById(
            solicitud.params.id
          );
          if (usuarioEncontrado._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'usuario leído',
              datos: usuarioEncontrado,
            });
          } */
        } catch (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al leer desayuno',
            datos: error,
          });
        }
      },
      leerDesayunos: async (solicitud, respuesta) => {
        try {
          respuesta.json({
            resultado: 'bien',
            mensaje: 'desayunos leídos',
            datos: null,
          });
          /* const todosLosUsuarios = await ModeloUsuario.find();
          respuesta.json({
            resultado: 'bien',
            mensaje: 'usuarios leídos',
            datos: todosLosUsuarios,
          }); */
        } catch (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al leer todos los desayunos',
            datos: error,
          });
        }
      },
      actualizarDesayuno: async (solicitud, respuesta) => {
        try {
          respuesta.json({
            resultado: 'bien',
            mensaje: 'desayuno actualizado',
            datos: null,
          });
          /* const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(
            solicitud.params.id,
            solicitud.body
          );
          if (usuarioActualizado._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'usuario actualizado',
              datos: usuarioActualizado._id,
            });
          } */
        } catch (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al actualizar desayuno',
            datos: error,
          });
        }
      },
      eliminarDesayuno: async (solicitud, respuesta) => {
        try {
          respuesta.json({
            resultado: 'bien',
            mensaje: 'desayuno eliminado',
            datos: null,
          });
          /* const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(
            solicitud.params.id
          );
          if (usuarioEliminado._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'usuario eliminado',
              datos: null,
            });
          } */
        } catch (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al eliminar desayuno',
            datos: error,
          });
        }
      },
    };
    
    export default ControladorDesayunos;
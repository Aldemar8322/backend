import multer from 'multer';
import fs from 'fs-extra';
import ModeloGorras from '../modelos/modeloGorras.js';

const ControladorGorras = {
  crearGorra: async (solicitud, respuesta) => {
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
            mensaje: 'ocurrió un error al subir imagen gorra',
            datos: null,
          });
        } else {
          const nuevaGorra = new ModeloGorras({
            nombre: solicitud.body.nombre,
            color: solicitud.body.color,
            talla: solicitud.body.talla,
            disponible: solicitud.body.disponible,
            existencias: solicitud.body.existencias,
            imagen: solicitud.file.filename
          });
          const gorraCreada = await nuevaGorra.save();
          if (gorraCreada._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'gorra creada',
              datos: gorraCreada._id,
            });
          }
        }
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al crear gorra',
        datos: error,
      });
    }
  },
  leerGorra: async (solicitud, respuesta) => {
    try {
      const gorraEncontrada = await ModeloGorras.findById(solicitud.params.id);
      if (gorraEncontrada._id) {
        respuesta.json({
          resultado: 'bien',
          mensaje: 'gorra leída',
          datos: gorraEncontrada,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al leer gorra',
        datos: error,
      });
    }
  },
  leerGorras: async (solicitud, respuesta) => {
    try {
      const todosLasGorras = await ModeloGorras.find();
      respuesta.json({
        resultado: 'bien',
        mensaje: 'gorras leídas',
        datos: todosLasGorras,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al leer todas las gorras',
        datos: error,
      });
    }
  },
  actualizarGorra: async (solicitud, respuesta) => {
    try {
      const gorraActualizada = await ModeloGorras.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      if (gorraActualizada._id) {
        respuesta.json({
          resultado: 'bien',
          mensaje: 'gorra actualizada',
          datos: gorraActualizada._id,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al actualizar gorra',
        datos: error,
      });
    }
  },
  eliminarGorra: async (solicitud, respuesta) => {
    try {
      const gorraEliminada = await ModeloGorras.findByIdAndDelete(
        solicitud.params.id
      );
      if (gorraEliminada._id) {
        await fs.unlink('imagenes/' + gorraEliminada.imagen);
        respuesta.json({
          resultado: 'bien',
          mensaje: 'gorra eliminada',
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al eliminar gorra',
        datos: error,
      });
    }
  },
};

export default ControladorGorras;
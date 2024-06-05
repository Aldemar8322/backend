import ModeloUsuario from "../modelos/modeloUsuario.js";

const ControladorUsuarios = {
    crearUsuario: async (solicitud, respuesta) => {
      try {
        const nuevoUsuario = new ModeloUsuario(solicitud.body);
        const usuarioCreado = await nuevoUsuario.save();
        if (usuarioCreado._id) {
          respuesta.json({
            resultado: "exitoso",
            mensaje: "dato creado",
            datos: usuarioCreado._id
          });
        }
      } catch (error) {
        respuesta.json({
          resultado: "falla",
          mensaje: "ocurrió un error al crear dato",
          datos: error
        });
      }
      },
      leerUsuario: async (solicitud, respuesta) => {
        try {
          const usuarioEncontrado = await ModeloUsuario.findById(solicitud.params.id)
          if (usuarioEncontrado._id) {
            respuesta.json({
              resultado: "exitoso",
              mensaje: "dato leído",
              datos: usuarioEncontrado
            });
          }          
        } catch (error) {
        respuesta.json({
          resultado: "falla",
          mensaje: "ocurrió un error al leer dato",
          datos: error
        });
        }
      },
      leerUsuarios: async (solicitud, respuesta) => {
        try {
          const todosLosUsuarios = await ModeloUsuario.find();
          respuesta.json({
            resultado: "exitoso",
            mensaje: "datos leídos",
            datos: todosLosUsuarios
          });
        } catch (error) {
          respuesta.json({
            resultado: "falla",
            mensaje: "ocurrió un error al leer todos los datos",
            datos: error
          });
        }
      },
      actualizarUsuario: async (solicitud, respuesta) => {
        try {
          const usuarioActualizado= await ModeloUsuario.findByIdAndUpdate(
            solicitud.params.id,
            solicitud.body
          );
          if (usuarioActualizado._id) {
            respuesta.json({
              resultado: "exitoso",
              mensaje: "dato actualizado",
              datos: usuarioActualizado._id,
            });
          }
        } catch (error) {
          respuesta.json({
            resultado: "falla",
            mensaje: "Ocurrio un error al actualizar dato",
            datos: error
        });
      }
    },
      eliminarUsuario: async (solicitud, respuesta) => {
        try {
          const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(solicitud.params.id)
          if (usuarioEliminado._id) {
            respuesta.json({
              resultado: "exitoso",
              mensaje: "dato eliminado",
              datos: null
            });
          }          
        } catch (error) {
        respuesta.json({
          resultado: "falla",
          mensaje: "ocurrió un error al eliminar dato",
          datos: error
        });
        }
      }
}

export default ControladorUsuarios;
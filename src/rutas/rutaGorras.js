import { Router } from 'express';
import ControladorGorras from '../controladores/controladorGorras.js';

const enrutadorGorras = Router();

enrutadorGorras.post('/', ControladorGorras.crearGorra);
enrutadorGorras.get('/:id', ControladorGorras.leerGorra);
enrutadorGorras.get('/', ControladorGorras.leerGorras);
enrutadorGorras.put('/:id', ControladorGorras.actualizarGorra);
enrutadorGorras.delete('/:id', ControladorGorras.eliminarGorra);

export default enrutadorGorras;
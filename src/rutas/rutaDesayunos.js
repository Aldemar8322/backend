import { Router } from "express";
import ControladorDesayunos from "../controladores/controladorDesayunos.js";

const enrutadorDesayunos= Router();

enrutadorDesayunos.post('/', ControladorDesayunos.crearDesayuno);
enrutadorDesayunos.get('/:id', ControladorDesayunos.leerDesayuno);
enrutadorDesayunos.get('/', ControladorDesayunos.leerDesayunos);
enrutadorDesayunos.put('/:id', ControladorDesayunos.actualizarDesayuno);
enrutadorDesayunos.delete('/:id', ControladorDesayunos.eliminarDesayuno);


export default enrutadorDesayunos;
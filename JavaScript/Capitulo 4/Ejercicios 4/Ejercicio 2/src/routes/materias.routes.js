import { Router } from "express";
import {getAllmateriasController, getMateriasByIdController, insertMateriasController, updateMateriasController, deleteMateriasController} from '../controllers/materias.controller.json';

const router = Router();

router.get('/materias', getAllmateriasController);
router.get('/materias/:id', getMateriasByIdController);
router.post('/materias', insertMateriasController);
router.put('/materias/:id', updateMateriasController);
router.delete('/materias/:id', deleteMateriasController);

export default router;

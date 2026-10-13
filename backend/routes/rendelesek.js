import express from 'express';
import RendelesControllers from '../controllers/rendelesControllers.js';
var router = express.Router();

/* GET rendelesek listing. */
router.get('/', RendelesControllers.getAll);
router.get('/:id', RendelesControllers.getById);

export default router;

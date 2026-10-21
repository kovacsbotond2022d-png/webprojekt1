import express from 'express';
import userController from '../controllers/usercontrolers.js';
var router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getUserById);

export default router;
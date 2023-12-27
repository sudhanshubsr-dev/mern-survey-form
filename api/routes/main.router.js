import express from 'express';
import FormController from '../controllers/form.controller.js';


const router = express.Router();

router.post('/create',FormController.createForm);

export default router;
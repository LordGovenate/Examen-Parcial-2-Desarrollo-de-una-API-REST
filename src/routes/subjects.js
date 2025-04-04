const express = require('express');
const router = express.Router();
const subjectsController = require('../controllers/subjectsController');

// Endpoints CRUD
router.post('/', subjectsController.create);
router.get('/:id', subjectsController.getById);
router.put('/:id', subjectsController.update);
router.delete('/:id', subjectsController.delete);

// Endpoint con paginación
router.get('/', subjectsController.getAll);

module.exports = router;

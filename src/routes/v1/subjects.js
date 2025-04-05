const express = require('express');
const router = express.Router();
const subjectsController = require('../../controllers/subjectsController');
const validateSubject = require('../../validators/subjectValidator');

// Endpoints CRUD
router.post('/', validateSubject, subjectsController.create);
router.get('/:id', subjectsController.getById);
router.put('/:id', validateSubject, subjectsController.update);
router.delete('/:id', subjectsController.delete);

// Endpoint con paginación
router.get('/', subjectsController.getAll);

module.exports = router;

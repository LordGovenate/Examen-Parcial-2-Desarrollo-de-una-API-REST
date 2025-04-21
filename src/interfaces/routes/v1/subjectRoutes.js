const express = require('express');
const router = express.Router();
const subjectController = require('../../controllers/subjectController');
const validateSubject = require('../../../validators/subjectValidator');
const validateId = require('../../../validators/validateId');
const authenticateJWT = require('../../../middlewares/auth');


// Publics routes
router.get('/', subjectController.getAll);
router.put('/:id', validateId, validateSubject, subjectController.update);
router.delete('/:id', validateId, subjectController.delete);

// Only for readers
router.get('/:id', authenticateJWT('read:subjects'), validateId, subjectController.getById);

// Only for writers
router.post('/', authenticateJWT('write:subjects'), validateSubject, subjectController.create);


module.exports = router;

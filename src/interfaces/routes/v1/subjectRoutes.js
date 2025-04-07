const express = require('express');
const router = express.Router();
const subjectController = require('../../controllers/subjectController');
const validateSubject = require('../../../validators/subjectValidator');
const validateId = require('../../../validators/validateId');


router.post('/', validateSubject, subjectController.create);
router.get('/', subjectController.getAll);
router.get('/:id', validateId, subjectController.getById);
router.put('/:id', validateId, validateSubject, subjectController.update);
router.delete('/:id', validateId, subjectController.delete);

module.exports = router;

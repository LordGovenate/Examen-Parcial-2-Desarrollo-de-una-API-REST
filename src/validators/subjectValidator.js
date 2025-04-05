const { body, validationResult } = require('express-validator');

// Reglas para crear una materia
const validateSubject = [
  body('name')
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ min: 3 })
    .withMessage('El nombre debe tener al menos 3 caracteres'),

  body('description')
    .optional()
    .isString()
    .withMessage('La descripción debe ser un texto'),

  // Middleware que procesa los resultados
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    next();
  }
];

module.exports = validateSubject;

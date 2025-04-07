const BadRequestError = require('../utils/errors/BadRequestError');

module.exports = (req, res, next) => {
  const id = req.params.id;

  if (!/^\d+$/.test(id)) {
    return next(new BadRequestError('Invalid ID format'));
  }

  next();
};

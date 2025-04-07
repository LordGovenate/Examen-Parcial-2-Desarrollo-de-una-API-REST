const BadRequestError = require('../../utils/errors/BadRequestError');

module.exports = function getAllSubjects(subjectRepository) {
  return async function ({ page, size }) {
    page = parseInt(page);
    size = parseInt(size);

    if (isNaN(page) || isNaN(size) || page <= 0 || size <= 0) {
      throw new BadRequestError('Invalid pagination parameters');
    }

    const offset = (page - 1) * size;

    try {
      return await subjectRepository.findAll({ limit: size, offset });
    } catch (error) {
      throw new Error('Error retrieving subjects');
    }
  };
};


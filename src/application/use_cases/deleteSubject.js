const NotFoundError = require('../../utils/errors/NotFoundError');

module.exports = function deleteSubject(subjectRepository) {
  return async function (id) {
    const deleted = await subjectRepository.delete(id);
    if (!deleted) {
      throw new NotFoundError('Subject not found');
    }
    return deleted;
  };
};

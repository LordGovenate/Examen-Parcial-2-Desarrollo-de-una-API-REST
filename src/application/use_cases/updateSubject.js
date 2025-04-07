const ConflictError = require('../../utils/errors/ConflictError');
const NotFoundError = require('../../utils/errors/NotFoundError');

module.exports = function updateSubject(subjectRepository) {
  return async function (id, subjectData) {
    const existing = await subjectRepository.findByName(subjectData.name);

    if (existing && existing.id !== parseInt(id)) {
      throw new ConflictError('A subject with this name already exists');
    }

    const updated = await subjectRepository.update(id, subjectData);
    if (!updated) {
      throw new NotFoundError ('Subject not found');
    }

    return updated;
  };
};

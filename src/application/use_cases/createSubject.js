const Subject = require('../../domain/entities/Subject');
const ConflictError = require('../../utils/errors/ConflictError');

module.exports = function createSubject(subjectRepository) {
  return async function (subjectData) {
    const existing = await subjectRepository.findByName(subjectData.name);
    if (existing) {
      throw new ConflictError('A subject with this name already exists');
    }

    const subject = new Subject(subjectData);
    return await subjectRepository.create(subject);
  };
};

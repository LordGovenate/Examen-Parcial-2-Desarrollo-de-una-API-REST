const NotFoundError = require('../../utils/errors/NotFoundError');

module.exports = function getSubjectById(subjectRepository) {
  return async function (id) {
    const subject = await subjectRepository.findById(id);
    if (!subject) {
      throw new NotFoundError('Subject not found');
    }
    return subject;
  };
};

  
// Repositorio
const SubjectRepositoryImpl = require('./infrastructure/repositories/SubjectRepositoryImpl');

// Casos de uso
const createSubject = require('./application/use_cases/createSubject');
const getSubjectById = require('./application/use_cases/getSubjectById');
const updateSubject = require('./application/use_cases/updateSubject');
const deleteSubject = require('./application/use_cases/deleteSubject');
const getAllSubjects = require('./application/use_cases/getAllSubjects');

// Inyección manual de dependencias
const subjectRepository = new SubjectRepositoryImpl();

module.exports = {
  subjectUseCases: {
    createSubject: createSubject(subjectRepository),
    getSubjectById: getSubjectById(subjectRepository),
    updateSubject: updateSubject(subjectRepository),
    deleteSubject: deleteSubject(subjectRepository),
    getAllSubjects: getAllSubjects(subjectRepository),
  }
};

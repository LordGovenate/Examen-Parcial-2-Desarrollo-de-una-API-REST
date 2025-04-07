const { subjectUseCases } = require('../../container');
const { successResponse, errorResponse } = require('../../utils/responseHandler.js');

const subjectController = {
  async create(req, res, next) {
    try {
      const subject = await subjectUseCases.createSubject(req.body);
      return successResponse(res, subject, 'Subject created successfully', 201);
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const subject = await subjectUseCases.getSubjectById(req.params.id);
      return successResponse(res, subject, 'Material found');
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const updated = await subjectUseCases.updateSubject(req.params.id, req.body);
      return successResponse(res, updated, 'Subject updated correctly');
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      await subjectUseCases.deleteSubject(req.params.id);
      return successResponse(res, null, 'Subject successfully removed');
    } catch (error) {
      next(error);
    }
  },

  async getAll(req, res, next) {
    try {
      const { page, size } = req.query;
      const subjects = await subjectUseCases.getAllSubjects({ page, size });
      return successResponse(res, subjects, 'Subjects found');
    } catch (error) {
      next(error);
    }
  }
};  

module.exports = subjectController;

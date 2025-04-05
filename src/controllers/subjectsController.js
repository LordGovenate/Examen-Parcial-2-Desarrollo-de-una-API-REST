const Subject = require('../models/subjectModel');
const { successResponse, errorResponse } = require('../utils/responseHandler');

const subjectsController = {
  async create(req, res, next) {
    try {
      const subject = req.body;
      const existing = await Subject.findByName(subject.name);
      if (existing) {
        return errorResponse(res, 'Ya existe una materia con ese nombre', 400);
      }

      const newSubject = await Subject.create(subject);
      return successResponse(res, newSubject, 'Materia creada correctamente', 201);
    } catch (error) {
      next(error);
    }
  },


  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const subject = await Subject.findById(id);
      if (!subject) {
        return errorResponse(res, 'Materia no encontrada', 404);
      }
      return successResponse(res, subject, 'Materia encontrada');
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const subject = req.body;

      const existingSubject = await Subject.findById(id);
      if (!existingSubject) {
        return errorResponse(res, 'Materia no encontrada', 404);
      }

      const duplicate = await Subject.findByName(subject.name);
      if (duplicate && duplicate.id !== parseInt(id)) {
        return errorResponse(res, 'Ya existe una materia con ese nombre', 400);
      }

      const updatedSubject = await Subject.update(id, subject);
      return successResponse(res, updatedSubject, 'Materia actualizada correctamente');
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const success = await Subject.delete(id);
      if (!success) {
        return errorResponse(res, 'Materia no encontrada', 404);
      }
      return successResponse(res, null, 'Materia eliminada correctamente');
    } catch (error) {
      next(error);
    }
  },

  async getAll(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const size = parseInt(req.query.size) || 10;
      const subjects = await Subject.findAll(page, size);
      const totalItems = await Subject.countAll();
      const totalPages = Math.ceil(totalItems / size);

      return successResponse(res, {
        subjects,
        pagination: {
          page,
          size,
          totalItems,
          totalPages
        }
      }, 'Materias obtenidas correctamente');
    } catch (error) {
      next(error);
    }
  }
};

module.exports = subjectsController;

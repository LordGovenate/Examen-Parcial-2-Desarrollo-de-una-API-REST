const Subject = require('../models/subjectModel');

const subjectsController = {
  async create(req, res) {
    try {
      const subject = req.body;
      const newSubject = await Subject.create(subject);
      res.status(201).json(newSubject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const subject = await Subject.findById(id);
      if (!subject) return res.status(404).json({ message: 'Materia no encontrada' });
      res.json(subject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const subject = req.body;
      const updatedSubject = await Subject.update(id, subject);
      res.json(updatedSubject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const success = await Subject.delete(id);
      if (!success) return res.status(404).json({ message: 'Materia no encontrada' });
      res.json({ message: 'Materia eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const size = parseInt(req.query.size) || 10;
      const subjects = await Subject.findAll(page, size);
      res.json(subjects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = subjectsController;

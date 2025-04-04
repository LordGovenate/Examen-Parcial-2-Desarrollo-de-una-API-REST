const db = require('../config/db');

const Subject = {
  async create(subject) {
    const { name, description } = subject;
    const [result] = await db.execute(
      'INSERT INTO subjects (name, description) VALUES (?, ?)',
      [name, description]
    );
    return { id: result.insertId, ...subject };
  },

  async findById(id) {
    const [rows] = await db.execute('SELECT * FROM subjects WHERE id = ?', [id]);
    return rows[0];
  },

  async update(id, subject) {
    const { name, description } = subject;
    await db.execute(
      'UPDATE subjects SET name = ?, description = ? WHERE id = ?',
      [name, description, id]
    );
    return { id, ...subject };
  },

  async delete(id) {
    const [result] = await db.execute('DELETE FROM subjects WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },

  async findAll(page = 1, size = 10) {
    const offset = (page - 1) * size;
    const [rows] = await db.execute(
      'SELECT * FROM subjects LIMIT ? OFFSET ?',
      [parseInt(size), parseInt(offset)]
    );
    return rows;
  }
};

module.exports = Subject;

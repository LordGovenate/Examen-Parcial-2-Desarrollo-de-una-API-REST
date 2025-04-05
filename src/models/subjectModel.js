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
  
  async findByName(name) {
    const [rows] = await db.execute('SELECT * FROM subjects WHERE name = ?', [name]);
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
    page = parseInt(page);
    size = parseInt(size);
      // Validar que page y size sean enteros positivos
    if (isNaN(page) || isNaN(size) || page < 1 || size < 1) {
    throw new Error("Parámetros de paginación inválidos");
    }

    const offset = (page - 1) * size;
     // IMPORTANTE: construir la query directamente con los valores ya validados
    const query = `SELECT * FROM subjects LIMIT ${size} OFFSET ${offset}`;
    const [rows] = await db.execute(query);
    return rows;
    },
    async countAll() {
    const [result] = await db.execute('SELECT COUNT(*) as total FROM subjects');
    return result[0].total;
  }
};

module.exports = Subject;

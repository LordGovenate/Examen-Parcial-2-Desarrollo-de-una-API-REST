const db = require('../../config/db');
const Subject = require('../../domain/entities/Subject');
const SubjectRepository = require('../../domain/repositories/SubjectRepository');

class SubjectRepositoryImpl extends SubjectRepository {
  async create(subjectData) {
    const { name, description } = subjectData;
  
    const [result] = await db.execute(
      'INSERT INTO subjects (name, description) VALUES (?, ?)',
      [name, description]
    );
  
    const insertedId = result.insertId || result.insertId === 0 ? result.insertId : null;
  
    return new Subject({
      id: insertedId,
      name,
      description
    });
  }

  async findById(id) {
    const [rows] = await db.execute('SELECT * FROM subjects WHERE id = ?', [id]);
    const data = rows[0];
    return data ? new Subject(data) : null;
  }

  async findByName(name) {
    const [rows] = await db.execute('SELECT * FROM subjects WHERE name = ?', [name]);
    const data = rows[0];
    return data ? new Subject(data) : null;
  }

  async update(id, subjectData) {
    const { name, description } = subjectData;
    const [result] = await db.execute(
      'UPDATE subjects SET name = ?, description = ? WHERE id = ?',
      [name, description, id]
    );
    return result.affectedRows > 0 ? new Subject({ id, ...subjectData }) : null;
  }

  async delete(id) {
    const [result] = await db.execute('DELETE FROM subjects WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }

  async findAll({ limit, offset }) {
    const l = parseInt(limit, 10);
    const o = parseInt(offset, 10);
  
    if (isNaN(l) || isNaN(o) || l <= 0 || o < 0) {
      throw new Error('Invalid pagination parameters');
    }

    const [rows] = await db.execute(
      `SELECT * FROM subjects LIMIT ${l} OFFSET ${o}`
    );
  
    return rows.map(row => new Subject(row));
  }
}

module.exports = SubjectRepositoryImpl;

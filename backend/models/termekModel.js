import pool from '../config/db.js';

const TermekModel = {
    async getAll() {
        const [rows] = await pool.query('SELECT * FROM termekek');
        return rows;
    },
    async getById(id) {
        const [row] = await pool.query('SELECT * FROM termekek WHERE id = ?', [id]);
        return row[0];
}
};

export default TermekModel;
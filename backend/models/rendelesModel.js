import pool from '../config/db.js';

const RendelesModel = {
    async getAll() {
        try {
            const [rows] = await pool.query('SELECT * FROM rendelesek');
            return rows;
        } catch (error) {
            throw error;
        }
    },
    async getById(id) {
        try {
            const [row] = await pool.query('SELECT * FROM rendelesek WHERE id = ?', [id]);
            return row[0];
        } catch (error) {
            throw error;
        }
    }
};

export default RendelesModel;
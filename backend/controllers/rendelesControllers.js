import RendelesModel from '../models/rendelesModel.js';

const RendelesControllers = {
    async getAll(req, res) {
        try {
            const rendelesek = await RendelesModel.getAll();
            res.json(rendelesek);
        } catch (error) {
            console.error('Hiba a rendelések lekérésekor:', error);
            res.status(500).json({ error: 'Hiba történt a rendelések lekérésekor.' });
        }
    },
    async getById(req, res) {
        try {
            const { id } = req.params;
            const rendeles = await RendelesModel.getById(id);
            if (!rendeles) {
                return res.status(404).json({ error: 'A megadott ID-val nem található rendelés.' });
            }
            res.json(rendeles);
        } catch (error) {
            console.error('Hiba a rendelés lekérésekor:', error);
            res.status(500).json({ error: 'Hiba történt a rendelés lekérésekor.' });
        }
    }
};

export default RendelesControllers;
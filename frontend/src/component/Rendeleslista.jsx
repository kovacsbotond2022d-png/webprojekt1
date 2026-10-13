import { useState, useEffect } from 'react'
import api from '../api/axioInstance'
import RendelesekKartya from './Rendelesekkartya.jsx'

export default function RendelesLista() {

    const [rendelesek, setRendelesek] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/rendelesek');
                if (!Array.isArray(response.data)) {
                    throw new TypeError('A rendelések API válasza nem tömb.');
                }
                setRendelesek(response.data);
            } catch (error) {
                console.error('Hiba a rendelések lekérésekor:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Rendelések</h1>
            {rendelesek.map((rendeles) => (
                <RendelesekKartya key={rendeles.id} rendeles={rendeles} />
            ))}

        </div>
    )
}

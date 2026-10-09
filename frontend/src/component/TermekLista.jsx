import { useState, useEffect } from 'react'
import api from '../api/axioInstance'
import TermekKartya from './TermekKartya'

export default function TermekLista() {

    const [termekek, setTermekek] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/termekek');
                if (!Array.isArray(response.data)) {
                    throw new TypeError('A termékek API válasza nem tömb.');
                }
                setTermekek(response.data);
            } catch (error) {
                console.error('Hiba a termékek lekérésekor:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Termékek</h1>
            {termekek.map((termek) => (
                <TermekKartya key={termek.id} termek={termek} />
            ))}

        </div>
    )
}
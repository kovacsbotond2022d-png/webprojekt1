export default function TermekKartya({ termek }) {
    return (
        <div>
            <h2>{termek.nev}</h2>
            <p>ár: {termek.ar} Ft</p>
            <p>keszlet: {termek.keszlet}</p>
        </div>
    )
}
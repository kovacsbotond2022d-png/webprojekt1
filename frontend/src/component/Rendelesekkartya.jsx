export default function RendelesekKartya({ rendeles }) {
    return (
        <div>
            <h2>Rendelés azonosító: {rendeles.id}</h2>
            <p>Vásárló: {rendeles.vevo_id}</p>
            <p>Összeg: {rendeles.termek_id} Ft</p>
            <p>Mennyiség: {rendeles.mennyiseg}</p>
            <p>ideje: {rendeles.rendeles_ideje}</p>
        </div>
    )
}
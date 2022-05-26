import axios from "axios";
import { useState } from "react";

export default function Index() {
    const [texto, setTexto] = useState('');
    const [caracter, setCaracter] = useState('');
    const [frequencia, setFrequencia] = useState(0);

    async function VerificarCaracteres() {
        const resp = await axios.get(`http://localhost:5000/dia2/FreqCaracter?texto=${texto}&caracter=${caracter}`)

        setFrequencia(resp.data.Frequencia)
    }


    return(
        <main>
            <h1>Frequência de caracteres</h1>
            <div>
                Texto: <input type='text' value={texto} onChange={e => setTexto(e.target.value)}></input>
            </div>
            <div>
                Caracter: <input type='text' value={caracter} onChange={e => setCaracter(e.target.value)}></input>
            </div>
            <div>
                <button onClick={VerificarCaracteres}> Verificar </button>
            </div>
            <div>
                Com qual frequencia aparece: {frequencia}
            </div>
           
        </main>
    )
}
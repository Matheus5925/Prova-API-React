import axios from "axios"
import { useState } from "react"

export default function Index() {
    const [cor, setCor] = useState(''); 
    const [resposta, setResposta] = useState('');

    async function VerificarCorPrimaria() {
        const resp = await axios.get('http://localhost:5000/dia2/corprimaria/' + cor);
        if (resp.data.confirmacao === true){
            setResposta('SIIM!')
        } else{
            setResposta('Não!!')
        }
    }

    return(
        <main>
            <h1>Cor Primaria</h1>
            <div>
                Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)}></input>
            </div>
            <div>
                <button onClick={VerificarCorPrimaria}> Verificar </button>
            </div>
            <div>
                É cor Primaria ? {resposta}
            </div>
           
        </main>
    )
}
import { useState } from "react"
import axios from "axios"


export default function Index() {
    const [numeros, setNumeros] = useState([])
    const [numero, setNumero] = useState(0)
    const [resposta, setResposta] = useState('');
    
    function adicionar() {
        setNumeros([...numeros, numero])
        setNumero('')
    }

    async function verificarMaior(params) {
        const resp = await axios.post('http://localhost:5000/dia2/maiornumero', numeros)
        setResposta(resp.data.maior)
    }

    return(
        <main>
            <h1>Qual numero é maior</h1>
            <div>
                Numeros: <input type='text' value={numero} onChange={e => setNumero(Number(e.target.value))}></input> 
                <button onClick={adicionar}> Adicionar Numero </button>
            </div>
            <div>
                {numeros.map(item =>
                    <div> {item} </div>
                )}
            </div>
            <div>
               <button onClick={verificarMaior}> Verificar </button> Maior Numero é: {resposta}
            </div>
           
        </main>
    )
}
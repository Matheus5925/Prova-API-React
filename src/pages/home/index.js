import { Link } from "react-router-dom";


export default function Index() {
    return(
        <main>
            <h1> Home </h1>
            <ul>
                <li> <Link to='/corprimaria'> Corprimaria</Link> </li>
                <li> <Link to='/FreqCaracteres'> FreqCaracateres</Link> </li>
                <li> <Link to='/ingressocinema'> Ingressocinema</Link> </li>
                <li> <Link to='/nummaior'> Nummaior</Link> </li>
            </ul>
        </main>
    )
}
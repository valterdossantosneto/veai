import { Link } from "react-router-dom";
import Header from "../../components/Header";
export default function Home(){
    return(
        <div>
            <Header/>
            <h1>Página inicial</h1>
            <Link to="/singin">
            <button> Login </button>
            </Link>
            <Link to="/singup">
            <button> Cadastro </button>
            </Link>
            <Link to="/singnupprodcts">
            <button> Cadastro de produtos </button>
            </Link>
        </div>
    )
}
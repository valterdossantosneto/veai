import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

export default function SingnUpProducts(){
    const {logout} = useContext(AuthContext);
    async function handleloguot() {
        await logout();
    }
    return(
        <div>
            <h1>cadastro de produtos</h1>
            <button onClick={ handleloguot } >Sair</button>
        </div>
    )
}
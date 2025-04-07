import { useState, useContext } from 'react';
import './singin.css';
import Camada_1 from '../../assets/Camada_1.png';
import userimg from '../../assets/user.png';
import chevron from '../../assets/chevron-left.png';
import lock from '../../assets/lock.png';
import { Link } from 'react-router-dom'; 

import { AuthContext } from '../../contexts/Auth';

export default function Recover(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext)

    async function handleSigIn(e){
        e.preventDefault();
        if(email !== '' & password !== ''){
            await signIn(email, password);
        }
    }

    return(
        <div>
        <div className="img_voltar">
        <Link to ="/"><img src={chevron} classNameName= "voltar" /></Link>
        </div>
        <div>
            <div className="modulo">
                <div className="modulo_1">
                    <div className="simbolo_login">
                    <img src={Camada_1} alt='logo da marca' />
                    </div>
                    <div className="texto_login">
                        <p>Uma comunidade confiável e intuitiva para as negociações estudantis.</p>
                    </div>
                </div>
                <div className="bloco">
                    <form onSubmit={handleSigIn} >
                    <div className="bloco_1">
                        <img src={userimg} />
                        <input type='text' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="bloco_2">
                        <img src={lock} />
                        <input type='senha' placeholder='senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <button type='submit'> {loadingAuth ? "carregando..." : "acessar"} </button>
                    </form>
                    <div className="Grup_text">
                        Já tem conta? <Link to="/singin" className="link" >Faça login</Link><br></br>
                        Não tem conta? <Link to="/singup" className="link" >Crie uma conta</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
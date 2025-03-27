import { useState, useContext } from 'react';
import './singin.css';
import Camada_1 from '../../assets/Camada_1.png';
import userimg from '../../assets/user.png';
import chevron from '../../assets/chevron-left.png';
import { Link } from 'react-router-dom'; 

import { AuthContext } from '../../contexts/Auth';

export default function SignIn(){
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
        <div className='conteiner-center' >
            <div className='login-area' >
                <div className='botão-voltar' >
                    <Link to ="/"><img src={chevron} /></Link>
                </div>
                <img src={Camada_1} alt='logo da marca' />
            </div>
            <div className='login' >
                <form onSubmit={handleSigIn} >
                    <div className='input-img' >
                    <img src={userimg} />
                    <input type='text' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                
                    <input type='senha' placeholder='senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button type='submit'> {loadingAuth ? "carregando..." : "Entrar"} </button>
                </form>
                <div className='link' >
                Não tem conta?
                <Link to="/singup" >Crie uma conta</Link>
                </div>
            </div>
        </div>
    )
}
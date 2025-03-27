import { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/Auth';

export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    async function handleSubmit(e){
        e.preventDefault();
        if(name !== '' && email !== '' & password !== ''){
            await signUp(email, password, name)
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit} >
                    <input type='text' placeholder='email' value={email} 
                    onChange={(e)=> setEmail(e.target.value)}/>
                    <input type='senha' placeholder='senha' value={password}
                     onChange={(e)=> setPassword(e.target.value)}/>
                     <input type='senha' placeholder='Nome' value={name}
                     onChange={(e)=> setName(e.target.value)}/>
                    <button type='submit'> {loadingAuth ? 'Carregando...' : 'Cadastrar'} </button>
                </form>
        </div>
    )
}
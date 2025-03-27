import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import { FiUpload } from "react-icons/fi";
import avatar from '../../assets/avatar.png';
import './profile.css';

export default function Profile(){

    const { user } = useContext(AuthContext);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avartUrl);

    const {logout} = useContext(AuthContext);
    async function handleloguot() {
        await logout();
    }
    return(
        <div>
            <div className="container">
                <form className="form-profile">
                    <label className="label-avatar">
                        <span>
                            <FiUpload color="#fff" size={25}/>
                        </span>
                            <input type="file" accept="image/*"/><br/>
                            {avatarUrl === null ? (
                                <img src={avatar} alt="foto de perfil" width={250} height={250}/>
                            ):(
                                <img src={avatarUrl} alt="foto de perfil" width={250} height={250}/>
                            )}
                    </label>

                </form>
                <img src={avatar} alt="foto de perfil" width={250} height={250}/>
            </div>
            <h1>tela de perfil</h1>
            <button onClick={ handleloguot } >Sair</button>
        </div>
    )
}
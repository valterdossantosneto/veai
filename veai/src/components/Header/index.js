import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';
import'./header.css';


export default function Header(){
    return(
        <div className="sidebar">
            <div className="itens">
            <Link to="/home">
            <FiHome color='' size={24}/>
            Home
            </Link>
            <Link>
            <FiUser color='' size={24}/>
            Favoristos
            </Link>
            <Link>
            <FiSettings color='' size={24}/>
            Adicionar 
            </Link>
            <Link>
            <FiSettings color='' size={24}/>
            Configurações
            </Link>
            </div>
        </div>
    )
}
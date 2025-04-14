import { Link } from "react-router-dom";
import bookmark from '../../assets/bookmark.png';
import iconsearch from '../../assets/iconsearch.png';
import './home.css';
export default function Home(){
    return(
        
        <div className="area">
            <div className="bloco_cabeçalho">
                <img src={bookmark} />
                <button className="botao_anuncio">Anunciar</button>
                <div className="area_login">
                    
                    <Link to="/singin"> Login </Link>
                
                </div>
            </div>
            <Link to="/singnupprodcts">
            <button> Cadastro de produtos </button>
            </Link>
            <div className="bloco_guias" >
                <div className="bloco_guia_texto" >
                    Uma comunidade confiável e intuitiva para as negociaçõesestudantis.
                </div>
               <div className="bloco_guias_bloco2">
                    <div className="bloco_guias_bloco2_pesquisa" >
                        <div className="bloco_guias_bloco2_pesquisa2">
                            <img src={iconsearch} className="bloco_guias_bloco2_img_pesquisa"/>
                            <input type="text" placeholder="vê aí se tem ..."/>
                        </div>
                    </div>
                    <div className="bloco_guias_bloco2_botoes">
                        <div className="bloco_guias_bloco2_botoes2">
                            <button>Livros</button>
                            <button>Eletrônicos</button>
                            <button>Móveis</button>
                        </div>
                    </div>
               </div> 
               <div className="bloco_guias_bloco2_anuncio">
                    <div className="bloco_guias_bloco2_anuncio2">
                        anúncios
                    </div>
                    <div className="bloco_guias_bloco2_anuncio3">
                        anúncios
                    </div>
               </div>
            </div>
            <div>
                <div>
                    anúncios em destaque
                </div>
                <div>
                    móveis
                </div>
            </div>
        </div>
    )
}
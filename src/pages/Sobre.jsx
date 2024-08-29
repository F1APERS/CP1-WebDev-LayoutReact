import AboutContent from "../components/ConteudoPrincipal/aboutContent";
import cel1 from "../assets/images/celulares-sobre/cel1.svg"
import cel2 from "../assets/images/celulares-sobre/cel2.svg"
import cel3 from "../assets/images/celulares-sobre/cel3.svg"
import "../style/sobre.css"

function Sobre() {
    return ( 
        <>
            <AboutContent />
            <div className="body-cards-sobre">
                <div className="titulo-cards-sobre">
                    <h2>Planos</h2>
                </div>
                <div className="cards-sobre">
                    <img src={cel1} alt="celular" />
                    <img src={cel2} alt="celular" />
                    <img src={cel3} alt="celular" />
                </div>
            </div>
            
        </>
     );
}

export default Sobre;
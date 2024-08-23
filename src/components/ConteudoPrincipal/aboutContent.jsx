import ImgCel1 from '../../assets/images/cel1.svg'
import ImgCel2 from '../../assets/images/cel2.svg'

function AboutContent() {
    return ( 
        <>
            <div className="body-about">
                <div className="conteudo-about">
                    <h1>Bem-vindo à revolução dos vídeos!</h1>
                    <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
                    <button>Baixe o app</button>
                </div>
                <img src={ImgCel1} alt="celular 1" />
                <img src={ImgCel2} alt="celular 2" />
            </div>
        </>
     );
}

export default AboutContent;
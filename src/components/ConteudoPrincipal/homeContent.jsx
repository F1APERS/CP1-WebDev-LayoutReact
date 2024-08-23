import ImgHome from '../../assets/images/ImagemHome.svg'

function HomeContent() {
    return ( 
        <>
            <div className="body-home">
                <div className="conteudo-home">
                    <h1>Crie seus vídeos online</h1>
                    <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                    <button>Começar agora!</button>
                </div>
                <img src={ImgHome} alt="homem pulando" />
            </div>
        </>
     );
}

export default HomeContent;
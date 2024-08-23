import RedesSociaisCard from "../components/Cards/RedesSociais";
import igIcon from "../assets/icons/specials/ig.svg";
import ytIcon from "../assets/icons/specials/yt.svg";
import ttkIcon from "../assets/icons/specials/ttk.svg";
import fcbIcon from "../assets/icons/specials/fcb.svg";
import HomeContent from "../components/ConteudoPrincipal/homeContent";

function Home() {
    return (
        <>

            <HomeContent />

            <RedesSociaisCard
                titulo="Youtube" 
                imagem={ytIcon} 
                numero="01" 
                descricao="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
            />
            <RedesSociaisCard 
                titulo="Tiktok" 
                imagem={ttkIcon} 
                numero="02" 
                descricao="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
            />
            <RedesSociaisCard 
                titulo="Facebook" 
                imagem={fcbIcon} 
                numero="03" 
                descricao="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
            />
            <RedesSociaisCard 
                titulo="Instagram" 
                imagem={igIcon} 
                numero="04" 
                descricao="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
            />

        </>
    );
}

export default Home;
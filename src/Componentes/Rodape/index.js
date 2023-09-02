import "./estilo.css";

export default function Rodape () {
    return (
        <footer className="rodape">
            <div className="container-limite container-rodape">
                <div className="titulo-rodape">
                    <img src="assets/logo.png" alt="Logo" />
                    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estrátegias, ferramentas e tecnologias personalizadas.</p>
                </div>
                <nav>
                    <a><img src = "assets/facebook.png" /></a>
                    <a><img src = "assets/twitter.png" /></a>
                    <a><img src = "assets/linkedin.png" /></a>
                    <a><img src = "assets/dribble.png" /></a>
                    <a><img src = "assets/behance.png" /></a>
                    <a><img src = "assets/google-plus.png" /></a>
                </nav>
                <div className="rodape-ro">
                    <p>Copyright 2022 ©️ <span>Álvaro de Castro Cunha</span></p>
                </div>
            </div>
        </footer>
    );
}
import "./estilo.css";
export default function Banner () {
    return (
        <section className="banner">
           <div className="container-limite banner-container">
           <div className="imagem-banner">
                <img src="assets/banner.png" alt="Banner" />
            </div>
            <div className="titulo-banner">
                <p>Branding / UI / UX / Tecnologia</p>
                <h2>Agência de Branding e <span>design digital</span></h2>

            </div>
            </div>
        </section>
    );
}
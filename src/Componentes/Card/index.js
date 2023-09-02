import "./estilo.css";

export default function Card () {
    return (
        <section className="secao-card">
           <div className="container-limite card-container">
           <div className="card">
                <p>junho 2012 - 2016</p>
                <h4>Web Designer</h4>
                <p>Pled Piper StartUp</p>
                <p>Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores</p>
            </div>

            <div className="card">
                <p>Agosto 2016 - 2019</p>
                <h4>Product Designer</h4>
                <p>E Corp</p>
                <p>Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda sua jornada de compra, impactando-o no momento certo.</p>
            </div>

            <div className="card">
                <p>Fevereiro 2019 - 2021</p>
                <h4>Degital Consulting</h4>
                <p>Arasaka Inc.</p>
                <p>Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução do plano de ação.</p>
            </div>
           </div>
        </section>
    );
}
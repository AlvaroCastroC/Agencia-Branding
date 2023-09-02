import React from "react";
import "./estilo.css";

export default function Topo (props) {
    return (
        <header>
            <div className="container-limite">
                <img src="assets/logo.png" alt="Logo da agência" title="Logo"/>
                <button className="opacao-botao" onClick={props.click}>
                    <img src={props.Tema} />
                </button>
            </div>
        </header>
    );
}
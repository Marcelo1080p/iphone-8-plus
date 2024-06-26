import React from "react";
import { Link } from "react-router-dom";
import Cadeado from "../../components/Cadeado";
import Datas from "../../components/Datas";
import DETAILS from "../../components/Details";
import Horas from "../../components/Horas";
import "./TELABLOQUEIO.css";

const TELABLOQUEIO = (props) => {

    return (
        <section className="containerBloqueio">
            <DETAILS
                hoor={<Cadeado/>}
            />
            <section className="datasHoras">
                <Datas/>
                <Horas/>
            </section>
            <Link to="/home">
                <button>Entrar</button> 
            </Link>

            <footer className="inferior">
                <p className="ponto">.</p>
                <div className="camera">
                    <p id="cameraP1"></p>
                    <p id="cameraP2"></p>
                </div>
            </footer>
        </section>
    )
};

export default TELABLOQUEIO;
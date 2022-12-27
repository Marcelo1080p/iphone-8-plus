import React from "react";
import TELABLOQUEIO from "../../Pages/TelaBloqueio";
import BOTAO from "../BOTAO";
import "./IPHONE.css";

const Iphone = (props) => {
    return (
        <main className="containerPhone">
            <header>
                <div className="containerHeader">
                    <p className="camera">
                        <span className="cameraReflexo"></span>
                    </p>
                    <p className="saidaAudio"></p>
                </div>
            </header>
            <section className="telas">
                {props.children}
            </section>
            <footer>
                <BOTAO type="button" />
            </footer>
        </main>
    )

};

export default Iphone;
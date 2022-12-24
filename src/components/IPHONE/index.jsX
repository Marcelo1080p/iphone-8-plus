import React from "react";
import TELABLOQUEIO from "../../Pages/TelaBloqueio";
import BOTAO from "../BOTAO";
import "./IPHONE.css";

const IPHONE = () => {
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
                <TELABLOQUEIO/>
            </section>
            <footer>
                <BOTAO type="button" />
            </footer>
        </main>
    )

};

export default IPHONE;
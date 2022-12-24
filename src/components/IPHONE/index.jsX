import React from "react";
import TELABLOQUEIO from "../../Pages/TelaBloqueio";
import BOTAO from "../BOTAO";
import "./IPHONE.css";

const IPHONE = () => {
    return (
        <main>
            <header>
                <div className="containerHeader">
                    <p className="camera">
                        <p className="cameraReflexo"></p>
                    </p>
                    <p className="saidaAudio"></p>
                </div>
            </header>
            <section>
                <TELABLOQUEIO/>
            </section>
            <footer>
                <BOTAO type="button" />
            </footer>
        </main>
    )

};

export default IPHONE;
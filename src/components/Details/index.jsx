import React from "react";
import "./Details.css"

const DETAILS = () => {
    return (
        <section className="containerDetails">
            <span className="sinais">
                <p className="sinalTim">
                    <div id="div1"></div>
                    <div id="div2"></div>
                    <div id="div3"></div>
                    <div id="div4"></div>
                </p>
                <p className="tim">TIM</p>
                <div className="wifi">
                        <div className="wifi1"></div>
                </div>
            </span>
            <span className="bloqueio">
                <span className="cadeado"></span>
            </span>
            <span className="infoBateria">
                <span>97%</span>
                <span className="bateria"></span>
            </span>
        </section>
    );
};

export default DETAILS;
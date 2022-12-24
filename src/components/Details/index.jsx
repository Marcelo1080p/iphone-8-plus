import React from "react";
import "./Details.css"

const DETAILS = () => {
    return (
        <section className="containerDetails">
            <span className="sinais">
                <span></span>
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
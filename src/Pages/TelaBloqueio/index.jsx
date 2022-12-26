import React from "react";
import Datas from "../../components/Datas";
import DETAILS from "../../components/Details";
import "./TELABLOQUEIO.css";

const TELABLOQUEIO = () => {

    

    return (
        <section className="containerBloqueio">
            <DETAILS/>
            <section className="datasHoras">
                <Datas/>
            </section>
        </section>
    )
};

export default TELABLOQUEIO;
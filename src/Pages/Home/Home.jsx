import React from "react";
import DETAILS from "../../components/Details";
import Horas from "../../components/Horas";
import "./Home.css";

const Home = (props) => {
    return (
        <div id="containerHome">
            <DETAILS 
                hoor={<Horas fontSize="0.6rem"/>}
            />
        </div>
    );
};

export default Home;
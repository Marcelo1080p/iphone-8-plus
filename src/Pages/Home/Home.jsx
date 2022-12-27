import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div id="home">Funfou
        <Link to="/">

            <button>Home</button>
        </Link>
        </div>
    );
};

export default Home;
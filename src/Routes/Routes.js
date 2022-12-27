import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Iphone from "../components/IPHONE";
import TELABLOQUEIO from "../Pages/TelaBloqueio";
import Home from "../Pages/Home/Home";
import "./../Routes/Global.css"

const MyRoute = () => {
    return (
    <Router>
            <Routes>
                <Route path="/" element={<Iphone><TELABLOQUEIO/></Iphone>} />
                <Route path="/home" element={<Iphone><Home/></Iphone>} />
            </Routes>
    </Router>
    );
};

export default MyRoute;
import React, { useState } from "react";
import "./Horas.css";

const Horas = () => {
  const[relog, setRelog] = useState('')
  setInterval(function relogio() {
    let date = new Date();
    let hor = date.getHours();
    let minu = date.getMinutes();
    if (hor < 10)  hor = "0" + hor
    if (minu < 10) minu = "0" + minu
    setRelog(`${hor}:${minu}`)
  }, 1000);
  //document.getElementById('horas').textContent = hor
 // document.getElementById('minutos').textContent = minu

  return (
    <div className="cotainerHor">
      <div id="horas">{relog}</div>
      
    </div>
  );
};

export default Horas;

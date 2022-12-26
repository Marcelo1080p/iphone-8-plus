import React, { useRef } from "react";
import "./Horas.css";

const Horas = () => {
  const horaRef = useRef("");
  const minRef = useRef("");
  setInterval(function relogio() {
    const date = new Date();
    const hora = date.getHours();
    const min = date.getMinutes();
    
    if (hora < 10) hora = "0" + hora;
    horaRef.current.innerText = hora;
    if (min < 10) min = "0" + min;
    minRef.current.innerText = min;
  }, 1000);

  return (
    <div className="cotainerHor">
      <div ref={horaRef}>00</div> :
      <div ref={minRef}>00</div>
    </div>
  );
};

export default Horas;

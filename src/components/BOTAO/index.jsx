import React from "react";
import "./BOTAO.css"

const BOTAO = (props) => {
  return <button className="botao" type={props.type}>{props.nome}</button>;
};

export default BOTAO;

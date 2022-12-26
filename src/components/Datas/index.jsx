import React from "react";
import "./Datas.css"

const Datas = () => {
    
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0')
    
    let diaSemana, mes = ''
    switch(data.getDay()) {
        case 0:
            diaSemana = "Domingo";
            break;
        case 1:
            diaSemana = "Segunda-feira"
            break;
        case 2:
            diaSemana = "Terça-feira"
            break;
        case 3:
            diaSemana = "Quarta-feira"
            break;
        case 4:
            diaSemana = "Quinta-feira"
            break;
        case 5:
            diaSemana = "Sexta-feira"
            break;
        case 6:
            diaSemana = "Sabádo"
            break;
        default:
            break;
    }
    
    switch(data.getMonth()) {
        case 0:
            mes = "janeiro"
            break;
        case 1:
            mes = "fevereiro"
            break;
        case 2:
            mes = "março"
            break;
        case 3:
            mes = "abril"
            break;
        case 4:
            mes = "maio"
            break;
        case 5:
            mes = "junho"
            break;
        case 6:
            mes = "julho"
            break;
        case 7:
            mes = "agosto"
            break;
        case 8:
            mes = "setembro"
            break;
        case 9:
            mes = "outubro"
            break;
        case 10:
            mes = "novembro"
            break;
        case 11:
            mes = "dezembro"
            break;
        default:
            break;
    }

    return <p className="datas">{diaSemana}, {dia} de {mes}</p>
}

export default Datas;
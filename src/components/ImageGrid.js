import React, { useEffect, useState } from 'react';
import './style.css';
// Uncomment the lines below if you decide to import images directly

import guanabara from "../images/baia-guanabara-residences.png";
import metropolitan from "../images/metropolitan-dream.png";
import orlaRecreio from "../images/orla-recreio.png";
import rioBranco from "../images/rio-branco.png";
import thePier from "../images/the-pier.png";
import orlaMaua from "../images/orla-maua.png"
import empreendimentosList from "./Helper/empreendimentos.json";

const imageMap = {
    "baia-guanabara-residences": guanabara,
    "metropolitan-dream": metropolitan,
    "orla-recreio": orlaRecreio,
    "rio-branco": rioBranco,
    "the-pier": thePier,
    "orla-maua": orlaMaua
};




function ImageGrid() {
    const [empreendimentos, setEmpreendimentos] = useState([]);

    useEffect(() => {
        setEmpreendimentos(empreendimentosList);
    }, []);

    return (
        <div className="image-grid">
            {empreendimentos.map((empreendimento) => (
                <div key={empreendimento.id} className="image-item">
                    <img src={imageMap[empreendimento.name]} alt={empreendimento.alt} />
                    <b>{empreendimento.text}</b>
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;
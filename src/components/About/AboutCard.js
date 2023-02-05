import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, mundo! Me chamo <span className="purple">Nathália Miriam</span>
            , tenho 26 anos e sempre morei em{" "}
            <span className="purple"> São Paulo, Brasil.</span>
            <br />
            Me graduarei em Análise e Desenvolvimento de Sistemas em Dezembro de
            2023!
            <br />
            <br />
            Além de codar, curto muito:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Atividades com a minha família
            </li>
            <li className="about-activity">
              <ImPointRight /> Me exercitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar bastante
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Tente mover o mundo - o primeiro passo será mover a si mesmo."{" "}
          </p>
          <footer className="blockquote-footer">Platão</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

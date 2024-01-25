import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Tenho <span className="purple"> 27 anos</span>, sempre morei em{" "}
            <span className="purple"> São Paulo</span>, Brasil e{" "}
            <span className="purple">amo</span> tecnologia.
            <br />
            Sou formada em{" "}
            <span className="purple">
              {" "}
              Análise e Desenvolvimento de Sistemas{" "}
            </span>{" "}
            desde dezembro de 2023.
            <br />
            Me considero muito <span className="purple"> criativa</span>, sempre{" "}
            <span className="purple"> curiosa</span> e{" "}
            <span className="purple"> disposta</span> à aprender coisas novas,
            <span className="purple"> atenta</span> aos detalhes,{" "}
            <span className="purple"> comunicativa</span>,
            <span className="purple"> paciente</span>,
            <span className="purple"> resiliente</span> e com
            <span className="purple"> pensamento crítico</span>.
            <br />
            <br />
            Além de codar, <span className="purple">curto muito</span>:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> atividades em família e amigos
            </li>
            <li className="about-activity">
              <ImPointRight /> me exercitar
            </li>
            <li className="about-activity">
              <ImPointRight /> viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> escutar música, ler e assistir séries
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

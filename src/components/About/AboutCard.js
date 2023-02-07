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
            , tenho <span className="purple"> 26 anos </span> e sempre morei em{" "}
            <span className="purple"> São Paulo</span>, Brasil.
            <br />
            Estou cursando{" "}
            <span className="purple">
              {" "}
              Análise e Desenvolvimento de Sistemas{" "}
            </span>{" "}
            com previsão de conclusão em Dezembro de 2023.
            <br />
            Me considero <span className="purple"> muito criativa</span>, sempre{" "}
            <span className="purple"> curiosa</span> e{" "}
            <span className="purple"> disposta</span> à aprender coisas novas,
            <span className="purple"> atenta</span> a detalhes,{" "}
            <span className="purple"> paciente</span> e
            <span className="purple"> resiliente</span>.
            <br />
            <br />
            Além de codar, curto muito:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Atividades em família e amigos
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

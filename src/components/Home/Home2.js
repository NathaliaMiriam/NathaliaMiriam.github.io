import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-pc-logo.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2
              style={{
                justifyContent: "center",
                fontSize: "1.8em",
              }}
            >
              PRINCIPAIS <span className="purple"> HARD </span> E{" "}
              <span className="purple"> SOFT SKILLS </span>:
            </h2>
            <p className="home-about-body">
              Como Desenvolvedora Mobile e Frontend tenho o foco em criar
              interfaces completas e impactantes que tornem a experiência do
              usuário prática e agradável, seja no{" "}
              <b className="purple">Desenvolvimento Mobile</b> ou{" "}
              <b className="purple">Desenvolvimento Web</b>.
              <br />
              <i>
                {/* <b className="purple">
                  {" "}
                  Android Nativo com Kotlin, React e Javascript.{" "}
                </b> */}
              </i>
              <br />
              Minhas aplicações possuem código limpo e boa arquitetura.
              <b className="purple"> Utilizo</b>:
              <i>
                <br />
                <br />
                - Kotlin; <br />
                - Android SDK; <br />
                - Jetpack Compose; <br />
                - Material Design; <br />
                - JavaScript; <br />
                - React.js; <br />
                - Node.js; <br />
                - HTML5; <br />
                - CSS3; <br />
                - SQLite e MySQL; <br />
                - Testes Unitários. <br />
                <br />
                Algumas das minhas{" "}
                <b className="purple">competências técnicas</b> e{" "}
                <b className="purple">pessoais</b> são:
                <br />
                <br />
                - Princípios sólidos; <br />
                - Arquitetura MVVM; <br />
                - Responsividade; <br />
                - APIs RESTful; <br />
                - Firebase SDK; <br />
                - Metodologias ágeis, principalmente Scrum; <br />
                - Busca por melhores resultados e qualidade de entrega; <br />
                - Aprendizagem rápida; <br />
                - Pensamento crítico; <br />
                - Ótima comunicação; <br />
                - Organização e pontualidade; <br />
                - Colaboração e trabalho em equipe. <br />
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "30%" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h3>ME ENCONTRE TAMBÉM EM</h3> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NathaliaMiriam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nathaliamiriam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nathaaliamiriam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

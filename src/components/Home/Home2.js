import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-pic.jpg";
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
            <h2 style={{ justifyContent: "center", fontSize: "1.8em" }}>
              MINHAS <span className="purple"> HARD SKILLS </span>:
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
              Até o momento, minhas habilidades se estendem pelas seguintes
              tecnologias e ferramentas:
              <i>
                <br />
                <b className="purple"> - no desenvolvimento Android Nativo </b>
                trabalho com Kotlin e possuo experiência em: Android SDK
                (Lifecycle, LiveData, ViewModel), ViewGroups (diferentes tipos
                de Layout), RecyclerView, Material Design, Retrofit para consumo
                de APIs, Room, DataBase, SQLite, Design Patterns, Arquitetura de
                Software (Clean Architecture e MVVM) e Testes Unitários.
                <br />
                <b className="purple"> - no desenvolvimento Frontend Web </b>
                possuo experiência em: React, JavaScript, Responsividade, Axios,
                Fetch e AJAX para consumo de APIs, Node.js e NPM, HTML e JSX, e
                estilização com CSS, SCSS e MUI Components.
              </i>
              <br />
              <br />
              Também possuo experiência em: Git, GitHub, consumo de APIs
              RESTful, SQL e NoSQL, Firebase SDK, Metodologias Ágeis, UX e UI
              Design, Redes e Inglês Técnico.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "50%" }}
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

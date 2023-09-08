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
            <h2 style={{ fontSize: "2.0em" }}>
              PERMITA <span className="purple"> APRESENTAR-ME </span>:
            </h2>
            <p className="home-about-body">
              Atualmente, desenvolvo aplicações Mobile Android como Freelance e
              meu foco como desenvolvedora está em desenvolver interfaces
              completas e impactantes que tornem a experiência do usuário
              prática e agradável, seja no,{" "}
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
                trabalho com Kotlin e possuo experiência em: Android SDK,
                Lifecycle, LiveData, RecyclerView, Material Design, Retrofit
                para consumo de APIs, Room, DataBase, SQLite, Clean Architecture
                e Arquitetura MVVM, além de Testes Unitários.
                <br />
                <b className="purple">- no desenvolvimento Frontend Web </b>
                possuo experiência em: React, JavaScript, Responsividade, Axios,
                Fetch e AJAX para consumo de APIs, Node.js e NPM, HTML e JSX, e
                estilização com CSS, SCSS e MUI Components.
                <br />
                <br />
                Também possuo experiência em: Git, GitHub, APIs RESTful, SQL e
                NoSQL, Firebase SDK, Metodologias Ágeis, UX/UI, Redes e Inglês
                Técnico.
              </i>
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
            <h2>ME ENCONTRE TAMBÉM EM</h2>
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

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
              Atualmente, tenho como objetivo profissional entrar para a área
              Tech e me aprofundar cada vez mais neste universo.
              <br />
              <br />
              Estou focando meu aprendizado em
              <i>
                <b className="purple">
                  {" "}
                  React.js, Javascript e Kotlin (Android).{" "}
                </b>
              </i>
              <br />
              <br />
              Mas, como sou muito curiosa, sempre que possível estou de olho
              numa linguagem ou outra, aprendendo novas técnicas e ferramentas,
              a fim de aumentar o meu repertório.
              <br />
              <br />
              Minha área de interesse é construir interfaces dinâmicas,
              acessíveis e que encantem os usuários, seja no
              <i>
                <b className="purple"> Desenvolvimento Web </b> ou no{" "}
                <b className="purple">Desenvolvimento de Aplicativos.</b>
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
            <h2>ME ENCONTRE EM</h2>
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

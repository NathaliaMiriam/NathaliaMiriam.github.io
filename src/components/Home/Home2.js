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
              Atualmente desenvolvo aplicações Mobile Android como Freelance e
              busco uma oportunidade de emprego como Desenvolvedora Mobile ou
              Frontend.
              <br />
              <br />
              Estou focando meu aprendizado em
              <i>
                <b className="purple">
                  {" "}
                  Android Nativo com Kotlin, React.js e Javascript.{" "}
                </b>
              </i>
              <br />
              <br />
              Tenho interesse em construir interfaces dinâmicas, acessíveis e
              que encantem os usuários, seja no
              <i>
                <b className="purple"> Desenvolvimento Mobile </b> ou no{" "}
                <b className="purple">Desenvolvimento Web.</b>
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

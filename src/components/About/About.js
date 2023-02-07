import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import CodeImg from "../../Assets/code-pic.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Saiba quem <strong className="purple">eu sou</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={3}
            style={{
              paddingTop: "50px",
              paddingBottom: "50px",
              width: "340px",
            }}
            className="code-img"
          >
            <img
              src={CodeImg}
              alt="code"
              className="img-fluid"
              style={{ borderRadius: "4%" }}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tech Stack </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> que mais uso
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

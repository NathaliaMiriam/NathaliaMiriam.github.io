import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>Em Construção...</p>
        {
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Node-MySQL-API"
                description="API com Node.js e MySQL utilizando CRUD completo."
                ghLink="https://github.com/NathaliaMiriam/Node-MySQL-API"
                //demoLink="https://chatify-49.web.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Pokedex-react"
                description="Pokedex de página única utilizando React.js, MUI, Axios e a PokéAPI pública."
                ghLink="https://github.com/NathaliaMiriam/Pokedex-react"
                demoLink="https://nathaliamiriam.github.io/Pokedex-react/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="Pokedex"
                description="Pokedex responsiva feita com JavaScript assíncrono, HTML, CSS e a PokéAPI pública"
                ghLink="https://github.com/NathaliaMiriam/Pokedex"
                demoLink="https://nathaliamiriam.github.io/Pokedex/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="Responsive-website"
                description="Página responsiva feita com JavaScript, HTML e SCSS."
                ghLink="https://github.com/NathaliaMiriam/Responsive-website"
                demoLink="https://nathaliamiriam.github.io/Responsive-website/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={suicide}
                isBlog={false}
                title="Form"
                description="Formulário simples e ao mesmo tempo elegante feito com HTML e CSS."
                ghLink="https://github.com/NathaliaMiriam/Form"
                demoLink="https://nathaliamiriam.github.io/Form/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emotion}
                isBlog={false}
                title="NN-roupas-pet"
                description="Projeto em HTML e CSS para um ateliê de roupas e acessórios customizados para Pets."
                ghLink="https://github.com/NathaliaMiriam/NN-roupas-pet"
                demoLink="https://nathaliamiriam.github.io/NN-roupas-pet/"
              />
            </Col>
          </Row>
        }
      </Container>
    </Container>
  );
}

export default Projects;

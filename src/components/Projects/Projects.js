import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SiteResponsivo from "../../Assets/Projects/project-site-responsivo.png";
import NNRoupasPet from "../../Assets/Projects/project-nn-roupas-pet.png";
import PokedexVanilla from "../../Assets/Projects/project-pokedex-vanilla.png";
import NodeAPI from "../../Assets/Projects/project-node-api.png";
import Form from "../../Assets/Projects/project-form.png";
import PokedexReact from "../../Assets/Projects/project-pokedex-react.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos Recentes </strong>
        </h1>

        {
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={NodeAPI}
                isBlog={false}
                title="Node-MySQL-API"
                description="API com Node.js e MySQL utilizando CRUD completo."
                ghLink="https://github.com/NathaliaMiriam/Node-MySQL-API"
                //demoLink="https://chatify-49.web.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={PokedexReact}
                isBlog={false}
                title="Pokedex-react"
                description="Pokedex de página única (SPA) utilizando React.js, MUI, Axios e a PokéAPI pública."
                ghLink="https://github.com/NathaliaMiriam/Pokedex-react"
                demoLink="https://nathaliamiriam.github.io/Pokedex-react/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={PokedexVanilla}
                isBlog={false}
                title="Pokedex"
                description="Pokedex responsiva feita com JavaScript assíncrono, HTML, CSS e a PokéAPI pública"
                ghLink="https://github.com/NathaliaMiriam/Pokedex"
                demoLink="https://nathaliamiriam.github.io/Pokedex/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={SiteResponsivo}
                isBlog={false}
                title="Responsive-website"
                description="Página responsiva simulando uma landing page feita com JavaScript, HTML e SCSS."
                ghLink="https://github.com/NathaliaMiriam/Responsive-website"
                demoLink="https://nathaliamiriam.github.io/Responsive-website/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Form}
                isBlog={false}
                title="Form"
                description="Formulário simples e ao mesmo tempo elegante feito com HTML e CSS."
                ghLink="https://github.com/NathaliaMiriam/Form"
                demoLink="https://nathaliamiriam.github.io/Form/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={NNRoupasPet}
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

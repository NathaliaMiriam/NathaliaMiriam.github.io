import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SiteResponsivo from "../../Assets/Projects/project-site-responsivo.png";
import NNRoupasPet from "../../Assets/Projects/project-nn-roupas-pet.png";
import PokedexVanilla from "../../Assets/Projects/project-pokedex-vanilla.png";
import NodeAPI from "../../Assets/Projects/project-node-api.png";
import embeauty from "../../Assets/Projects/embeauty.png";
import Form from "../../Assets/Projects/project-form.png";
import PokedexReact from "../../Assets/Projects/project-pokedex-react.png";
import TipCalculator from "../../Assets/Projects/tipcalculator.png";
import Tasks from "../../Assets/Projects/tasks.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MEUS <strong className="purple">PROJETOS RECENTES </strong>
        </h1>

        {
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={embeauty}
                isBlog={false}
                title="App-embeauty"
                description="Aplicativo para Gestão de Salões de Beleza em Android Nativo (Kotlin), utilizando a SDK do Firebase."
                ghLink="https://github.com/NYTechnologies/embeauty"
                //demoLink="https://chatify-49.web.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={TipCalculator}
                isBlog={false}
                title="App-TipCalculator"
                description="Aplicativo de uma calculadora de gorjetas com experiência de usuário mais sofisticada por meio dos Componentes do Material Design (MDC)."
                ghLink="https://github.com/NathaliaMiriam/TipCalculatorBR-app-android"
                //demoLink="https://chatify-49.web.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Tasks}
                isBlog={false}
                title="App-Tasks"
                description="Aplicativo que cria e gerencia tarefas. Feito com o auxílio do Android SDK, RecyclerView, Clean Architecture e Arq. MVVM, Room e Retrofit."
                ghLink="https://github.com/NathaliaMiriam/Tasks-app-android"
                //demoLink="https://chatify-49.web.app/"
              />
            </Col>

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
                description="Pokedex de página única (SPA) utilizando React, MUI, Axios e a PokéAPI pública."
                ghLink="https://github.com/NathaliaMiriam/Pokedex-react"
                demoLink="https://nathaliamiriam.github.io/Pokedex-react/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={PokedexVanilla}
                isBlog={false}
                title="Pokedex-vanilla"
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
                description="Formulário de serviços, simples e ao mesmo tempo elegante, feito com HTML e CSS."
                ghLink="https://github.com/NathaliaMiriam/Form"
                demoLink="https://nathaliamiriam.github.io/Form/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={NNRoupasPet}
                isBlog={false}
                title="N&N-RoupasPet"
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

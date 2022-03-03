import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import vw from "../../Assets/Projects/vw.jpeg"
import ar from "../../Assets/Projects/ar.jpg"
import unity from "../../Assets/Projects/unity.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work History </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the differents jobs I had.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vw}
              isBlog={false}
              title="Software Development Engineer"
              subtitle="Volkswagen Group Services, Martorell, from June 2021"
              description="Developing software for Human Machine Interface (HMI)
              projects and working on I+D projects. Working with Java,
              Python, UML, Jira, Confluence and SubVersion."
              link="https://www.volkswagen-groupservices.pt/es/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ar}
              isBlog={false}
              title="Software Developer"
              subtitle="ITK Engineering, Barcelona, from July 2018 - May 2021"
              description="Developing High Level Software applications. Worked on
              several projects like Android application which controls
              an electric bike using Bluetooth, improving a virtual
              testing toolchain, developing unit tests for an application
              and developing an application for Augmented Reality
              (HoloLens) and after for Virtual Reality (Oculus Quest).
              Also developed some webpages and software for
              integration for the company.
              Some of the technologies I used are Android Studio,
              Java, Kotlin, C++, C#, Unity, Python, Django, Jira,
              Confluence, SubVersion and Git."
              link="https://www.itk-engineering.de/en/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unity}
              isBlog={false}
              title="Junior Software Developer"
              subtitle = "InteriorVista, Barcelona, from March 2017 - July 2018"
              description="Developing C++ algorithms for a 3D Visualization Project.
              Also developed some internal tools for 3D visualizing with
              C# and Unity.
              Done my final degree project about Machine Learning
              with data exported from the internal tools in Python."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

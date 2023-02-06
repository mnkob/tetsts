import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import pdf from "../../Assets/../Assets/rod method.zip";
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
          MnKoB <strong className="purple">Tools </strong>
        </h1>
        <p style={{ color: "white" }}>
          All For Free $.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Rod Method"
              description="The best rod method with the perfect rods and hits made by mnkob "
              ghLink="https://cdn.discordapp.com/attachments/1068058287360184320/1071914790420750428/rod_method.zip"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AutoClicker"
              href={pdf}
              description="The best auto clicker made by mnkob 16 cps undetected work on all clients"
              ghLink="https://cdn.discordapp.com/attachments/1068058287360184320/1071954437536501820/mnkob.exe"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ping and FPS Tool"
              description="if you dont know how to use it i made a tutorial in our discord news"
              ghLink="https://cdn.discordapp.com/attachments/1068058287360184320/1071952045453611068/ping_and_fps.zip"     
              demoLink="https://discord.com/channels/1021661938872234025/1064493850107854928/1067935345389342810"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

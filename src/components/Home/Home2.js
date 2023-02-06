import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {
  BsDiscord,
} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
         
            
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Support</h1>
            <p>
              DeadlyOver <span className="purple">Discord </span>Server
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://discord.gg/deadlyovr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsDiscord />
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

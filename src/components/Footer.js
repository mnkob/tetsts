import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsDiscord,
} from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made By MnKoB</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://discord.gg/deadlyovr"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsDiscord />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

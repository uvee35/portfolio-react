import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                My name is Victor Marques. I'm originally from Binefar, Spain,
                but currently living in Leicester, UK. I have a passion for web
                development and design. I completed a front-end bootcamp at EdX
                University of Birmingham, where I gained expertise in HTML, CSS,
                JavaScript, and React.js. Additionally, I have completed the
                FreeCodeCamp curriculum, mastering topics such as responsive web
                design, JavaScript algorithms, and front-end libraries. I'm
                enthusiastic about learning new technologies and creating
                user-friendly and visually appealing web experiences.
              </Card.Text>
            </Card.Body>
          </Card>{" "}
          <Card>
            <Card.Body>
              <Card.Title>Tech</Card.Title>
              <div
                id="icons"
                className="justify-content-center tech-stack__section row"
              >
                <p>This are the technologies that I have learned so far </p>
                <ul className="list-unstyled mt-3">
                  <li>- HTML</li>
                  <li>- CSS</li>
                  <li>- JavaScript</li>
                  <li>- React</li>
                  <li>- Bootstrap</li>
                </ul>
                <div className="col-8">
                  <div className="d-flex justify-content-evenly flex-wrap flex-md-nowrap tech-stack">
                    <i
                      className="fab fa-html5"
                      alt="HTML"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fab fa-css3-alt"
                      alt="CSS"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fab fa-js"
                      alt="JavaScript"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fab fa-react"
                      alt="React"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fab fa-bootstrap"
                      alt="Bootstrap"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img src="/src/assets/aboutme.png" alt="About Me Image" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor. Cras elementum ultrices diam.
                Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                Proin porttitor, orci nec nonummy molestie, enim est eleifend
                mi, non fermentum diam nisl sit amet erat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img
              src="https://via.placeholder.com/300"
              alt="About Me Image"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

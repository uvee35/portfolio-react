import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Card>
        <Card.Body>
          <Card.Title>Contact Me: </Card.Title>
          <div style={{ marginBottom: "20px" }}>
            <div>
              <a
                href="mailto:victormarquesrina@hotmail.com"
                style={{ color: "black" }}
              >
                victormarquesrina@hotmail.com
              </a>
            </div>
            <div>
              <span>07752117594</span>
            </div>
            <div>
              <a href="https://github.com/uvee35" style={{ color: "black" }}>
                github.com/uvee35{" "}
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/victor-marques-944209102/"
                style={{ color: "black" }}
              >
                Linkedlin: Victor Marques Rina{" "}
              </a>
            </div>
          </div>
          <Form onSubmit={handleSubmit} className="w-100">
            <h1 style={{ fontSize: "1rem" }}>OR</h1>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactPage;

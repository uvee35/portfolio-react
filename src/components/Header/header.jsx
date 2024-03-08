import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import "./header.css";
function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "transparent" }}>
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: "white", fontSize: "34px", fontWeight: "bold" }}
        >
          Uvee
          <span
            className="text-warning"
            style={{ color: "#ffc107", fontSize: "34px", fontWeight: "bold" }}
          >
            Dev
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation"
        />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" style={{ color: "white", fontSize: "20px" }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/Projects"
              style={{ color: "white", fontSize: "20px" }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="/Contact"
              style={{ color: "white", fontSize: "20px" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;

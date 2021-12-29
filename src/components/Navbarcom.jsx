import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbarcom() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./Images/Complete1.png" height="50px" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">ABOUT US</Nav.Link>
          <Nav.Link href="#pricing">SERVICES</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Navbarcom;

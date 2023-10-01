import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./Delete.css";

function Delete() {
  return (
    <div className="non">
      <Row className="box-error">
        <Col>
          <h3>Resume Deleted</h3>
        </Col>
      </Row>

      <br></br>
      <Container>
        <Row className="box">
          <Col>
            <h1>Welcome To</h1>
            <h1>Resume Builder</h1>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row className="nav">
          <Col>
            <Navbar bg="light" data-bs-theme="light">
              <Container>
                <Navbar.Brand>You Have Not created any Resume</Navbar.Brand>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <br></br>

      <Button className="button-group" href="/about" variant="primary">
        Create New
      </Button>
    </div>
  );
}

export default Delete;

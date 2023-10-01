import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Homepage() {
  return (
    <div className="non">
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
                <Navbar.Brand>Durga</Navbar.Brand>
                <Nav className="me-auto">
                  <div className="margin">
                    <span className="span">
                      <Button href="/delete" variant="danger">
                        Delete
                      </Button>
                    </span>
                    <span className="span">
                      <Button href="/view" variant="secondary">
                        View
                      </Button>
                    </span>
                    <span className="span">
                      <Button href="/edit" variant="primary">
                        Edit
                      </Button>
                    </span>
                  </div>
                </Nav>
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

export default Homepage;

import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footerpage() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <div className="data">
              <Row>
                <Col md={{ span: 6, offset: 3 }}>{`
              Developed by Durga.
              `}</Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>{`              
                    9042081971
              `}</Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>{`                
             sdurga0611@gmail.com
              `}</Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footerpage;

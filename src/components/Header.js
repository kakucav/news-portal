import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container fluid className="header">
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <img src="/imgs/logo.jpg" alt="logo" className="logo" />
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;

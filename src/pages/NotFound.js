import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="not_found_msg">
            Oops... This page does not exist! You can go back to{" "}
            <Link to="/">Home Page.</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

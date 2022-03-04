import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim().length < 3) return false;

    navigate(`/search?q=${encodeURI(searchTerm.trim())}`);
    setSearchTerm("");
  };

  return (
    <Container fluid className="header">
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <img src="/imgs/logo.png" alt="logo" className="logo" />
            </Link>
          </Col>
          <Col className="search_input_holder">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                maxLength={50}
                placeholder="Search here..."
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;

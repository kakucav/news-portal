import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleDetails from "../components/ArticleDetails";

const Article = () => {
  const { index, page } = useParams();
  const { topHeadlines, searchResults } = useSelector(
    (state) => state.articles
  );
  const currentArticle =
    page === "top"
      ? topHeadlines[index]
      : page === "search"
      ? searchResults[index]
      : null;

  return (
    <Container>
      <Row>
        {!currentArticle && (
          <Col>
            <p className="not_found_msg">
              Oops... Selected news does not exist! You can go back to{" "}
              <Link to="/">Home Page.</Link>
            </p>
          </Col>
        )}
        {currentArticle && (
          <>
            <Col md={6} className="article_img_holder">
              <img
                className="article_img"
                src={
                  currentArticle.urlToImage ||
                  process.env.REACT_APP_ARTICLE_DEFAULT_IMG
                }
                alt={currentArticle.title}
              />
            </Col>
            <Col md={6}>
              <ArticleDetails article={currentArticle} />
            </Col>
            <Col className="article_content">
              <p>{currentArticle.content}</p>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Article;

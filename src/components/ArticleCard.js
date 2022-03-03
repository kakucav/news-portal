import React, { useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

const ArticleCard = ({ article, index }) => {
  const { title, description, urlToImage } = article;
  const [btnReadStyle, setBtnReadStyle] = useState({ display: "none" });
  const urlDefaultImage = process.env.REACT_APP_ARTICLE_DEFAULT_IMG;

  const handleInvalidImgUrl = (e) => {
    e.target.onError = null;
    e.target.src = urlDefaultImage;
  };

  const showReadBtn = () => {
    setBtnReadStyle({ display: "block" });
  };

  const hideReadBtn = () => {
    setBtnReadStyle({ display: "none" });
  };

  return (
    <Col md={6} lg={3}>
      <div
        className="article_card"
        onMouseEnter={showReadBtn}
        onMouseLeave={hideReadBtn}
      >
        <img
          src={urlToImage || urlDefaultImage}
          onError={handleInvalidImgUrl}
          alt={title}
          className="article_card_img"
        />
        <div className="article_card_body">
          <div>
            <span className="title">{title}</span>
          </div>
          <div>
            <p className="description">{description}</p>
          </div>
          <Link
            to={`/article/${index}`}
            className="btn_read"
            style={btnReadStyle}
          >
            Read full article
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default ArticleCard;

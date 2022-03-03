import React, { useState } from "react";
import Col from "react-bootstrap/Col";

const ArticleCard = ({ article }) => {
  const { title, description, urlToImage } = article;
  const [btnReadStyle, setBtnReadStyle] = useState({ display: "none" });

  const handleInvalidImgUrl = (e) => {
    e.target.onError = null;
    e.target.src = process.env.REACT_APP_ARTICLE_DEFAULT_IMG;
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
          src={urlToImage}
          onError={handleInvalidImgUrl}
          alt="article"
          className="article_card_img"
        />
        <div className="article_card_body">
          <div>
            <span className="title">{title}</span>
          </div>
          <div>
            <p className="description">{description}</p>
          </div>
          <button className="btn_read" style={btnReadStyle}>
            Read full article
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ArticleCard;

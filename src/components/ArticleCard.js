import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { truncateIfLonger } from "../helpers/format";

const ArticleCard = ({ article, index }) => {
  const { pathname } = useLocation();
  const { title, description, urlToImage } = article;
  const styleForBtn =
    window.innerWidth < 768 ? { display: "block" } : { display: "none" };
  const [btnReadStyle, setBtnReadStyle] = useState(styleForBtn);
  const urlDefaultImage = process.env.REACT_APP_ARTICLE_DEFAULT_IMG;
  const isTopHeadline = pathname === "/";

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
            <span className="title">{truncateIfLonger(title, 60)}</span>
          </div>
          <div>
            <p className="description">{truncateIfLonger(description, 180)}</p>
          </div>
        </div>
        <div className="article_card_footer">
          <Link
            to={`/article/${isTopHeadline ? "top" : "search"}/${index}`}
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

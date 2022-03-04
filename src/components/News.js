import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Spinner from "./Spinner";
import ArticleCard from "./ArticleCard";

const News = ({ news, newsCurrentCount, newsTotalCount, incrementPage }) => {
  const { loading } = useSelector((state) => state.articles);

  return (
    <>
      {/* LOADING */}
      {loading && !news.length && <Spinner />}

      {/* NO RESULTS */}
      {!loading && !news.length && <div>No results!</div>}

      {/* CARDS */}
      {!!news.length && (
        <Row className="cards_holder">
          {news.map((article, index) => (
            <ArticleCard key={index} article={article} index={index} />
          ))}
        </Row>
      )}

      {/* LOADING MORE */}
      {loading && !!news.length && <Spinner />}

      {/* LOADING MORE BTN */}
      {!loading && newsCurrentCount < newsTotalCount && newsCurrentCount < 100 && (
        <div className="btn_load_more_holder">
          <button className="btn_load_more" onClick={incrementPage}>
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default News;

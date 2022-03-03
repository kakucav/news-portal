import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopHeadlines } from "../store/reducers/articles";
import useDidMountEffect from "../hooks/useDidMountEffect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ArticleCard from "../components/ArticleCard";
import Spinner from "../components/Spinner";

const Landing = () => {
  const dispatch = useDispatch();
  const {
    loading,
    topHeadlines,
    topHeadlinesCurrentCount,
    topHeadlinesTotalCount,
  } = useSelector((state) => state.articles);
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!topHeadlines.length) dispatch(getTopHeadlines({ page }));
  }, []);

  useDidMountEffect(() => {
    dispatch(getTopHeadlines({ page }));
  }, [page]);

  return (
    <Container>
      {/* COUNT LABEL */}
      {!!topHeadlines.length && (
        <div>
          <span className="count_label">
            Showing {topHeadlinesCurrentCount} of {topHeadlinesTotalCount} top
            headlines
          </span>
        </div>
      )}

      {/* LOADING */}
      {loading && !topHeadlines.length && <Spinner />}

      {/* CARDS */}
      {!!topHeadlines.length && (
        <Row className="cards_holder">
          {topHeadlines.map((article, index) => (
            <ArticleCard key={index} article={article} index={index} />
          ))}
        </Row>
      )}

      {/* LOADING MORE */}
      {loading && !!topHeadlines.length && <Spinner />}

      {/* LOADING MORE BTN */}
      {!loading && topHeadlinesCurrentCount < topHeadlinesTotalCount && (
        <div className="btn_load_more_holder">
          <button className="btn_load_more" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </Container>
  );
};

export default Landing;

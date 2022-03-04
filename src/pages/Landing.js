import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articlesSlice, getTopHeadlines } from "../store/reducers/articles";
import useDidMountEffect from "../hooks/useDidMountEffect";
import Container from "react-bootstrap/Container";
import News from "../components/News";
import CountLabels from "../components/CountLabels";

const Landing = () => {
  const dispatch = useDispatch();
  const { topHeadlines, topHeadlinesCurrentCount, topHeadlinesTotalCount } =
    useSelector((state) => state.articles);
  const [page, setPage] = useState(1);

  const incrementPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!topHeadlines.length) dispatch(getTopHeadlines({ page }));

    dispatch(articlesSlice.actions.resetSearchResults());
  }, []);

  useDidMountEffect(() => {
    dispatch(getTopHeadlines({ page }));
  }, [page]);

  return (
    <Container>
      <h1 className="landing_heading">Top headlines</h1>

      {!!topHeadlines.length && (
        <CountLabels
          currentCount={topHeadlinesCurrentCount}
          totalCount={topHeadlinesTotalCount}
        />
      )}

      <News
        news={topHeadlines}
        newsCurrentCount={topHeadlinesCurrentCount}
        newsTotalCount={topHeadlinesTotalCount}
        incrementPage={incrementPage}
      />
    </Container>
  );
};

export default Landing;

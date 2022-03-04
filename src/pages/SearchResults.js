import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { articlesSlice, getSearchResults } from "../store/reducers/articles";
import { useSelector, useDispatch } from "react-redux";
import useDidMountEffect from "../hooks/useDidMountEffect";
import News from "../components/News";
import CountLabels from "../components/CountLabels";
import SortBy from "../components/SortBy";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const dispatch = useDispatch();
  const { searchResults, searchResultsCurrentCount, searchResultsTotalCount } =
    useSelector((state) => state.articles);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("publishedAt");

  const incrementPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!searchResults.length)
      dispatch(getSearchResults({ page, searchTerm, sortBy }));
  }, []);

  useDidMountEffect(() => {
    dispatch(articlesSlice.actions.resetSearchResults());
    if (page > 1) setPage(1);
    else dispatch(getSearchResults({ page: 1, searchTerm, sortBy }));
  }, [searchTerm, sortBy]);

  useDidMountEffect(() => {
    dispatch(getSearchResults({ page, searchTerm, sortBy }));
  }, [page]);

  return (
    <Container>
      <h1 className="search_heading">Search results</h1>
      <div>
        You searched for: <span className="search_term">{searchTerm}</span>
      </div>

      {!!searchResults.length && (
        <>
          <CountLabels
            currentCount={searchResultsCurrentCount}
            totalCount={searchResultsTotalCount}
          />
          <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        </>
      )}

      <News
        news={searchResults}
        newsCurrentCount={searchResultsCurrentCount}
        newsTotalCount={searchResultsTotalCount}
        incrementPage={incrementPage}
      />
    </Container>
  );
};

export default SearchResults;

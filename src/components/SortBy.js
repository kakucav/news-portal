import React from "react";

const SortBy = ({ sortBy, setSortBy }) => {
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <select
        className="sort_by_select"
        value={sortBy}
        onChange={handleSortByChange}
      >
        <option value={"popularity"}>Popularity</option>
        <option value={"relevancy"}>Relevance</option>
        <option value={"publishedAt"}>Published Date</option>
      </select>
    </div>
  );
};

export default SortBy;

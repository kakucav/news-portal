import React from "react";

const CountLabels = ({ currentCount, totalCount }) => {
  return (
    <div className="count_labels_holder">
      <span className="count_label">
        Showing {currentCount} of {totalCount} results
      </span>
      <span>Maximum number of results that are showed is 100.</span>
    </div>
  );
};

export default CountLabels;

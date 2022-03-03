import React from "react";

const ArticleDetails = ({ article }) => {
  const {
    source: { name: sourceName },
    author,
    title,
    description,
    publishedAt,
  } = article;

  return (
    <ul className="article_details_list">
      <li>
        <span>Source:</span> <span>{sourceName}</span>
      </li>
      <li>
        <span>Author:</span> <span>{author ? author : "Unknown author"}</span>
      </li>
      <li>
        <span>Title:</span> <span>{title}</span>
      </li>
      <li>
        <span>Description:</span> <span>{description}</span>
      </li>
      <li>
        <span>Published at:</span> <span>{publishedAt}</span>
      </li>
    </ul>
  );
};

export default ArticleDetails;

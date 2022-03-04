import React from "react";
import { formatDate } from "../helpers/format";

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
        Source: <span>{sourceName}</span>
      </li>
      <li>
        Author: <span>{author ? author : "Unknown author"}</span>
      </li>
      <li>
        Title: <span>{title}</span>
      </li>
      <li>
        Description:{" "}
        <span>{description ? description : "No description provided"}</span>
      </li>
      <li>
        Published at: <span>{formatDate(publishedAt)}</span>
      </li>
    </ul>
  );
};

export default ArticleDetails;

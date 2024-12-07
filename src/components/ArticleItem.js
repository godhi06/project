import React from "react";

function ArticleItem({ article }) {
  const { headline, byline, pub_date, web_url } = article;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{headline.main}</h3>
      <p>By: {byline?.original || "Unknown"}</p>
      <p>Published: {new Date(pub_date).toLocaleDateString()}</p>
      <a href={web_url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default ArticleItem;

import React from "react";
import ArticleItem from "./ArticleItem";



// function ArticleList({ articles }) {
//   if (articles.length === 0) {
//     return <p>No articles found. Try another search.</p>;
//   }

//   return (
//     <div>
//       {articles.map((article) => (
//         <ArticleItem key={article._id} article={article} />
//       ))}
//     </div>
//   );
// }


function ArticleList({ articles }) {
  if (!articles || articles.length === 0) {
    return <p>No articles found. Try another search.</p>;
  }

  return (
    <div>
      {articles.map((article) => (
        <ArticleItem key={article._id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;

import React, { useEffect, useState } from "react";
import ArticleImages from "./ArticleImages";
import { Link } from "react-router-dom";
var url = "https://static01.nyt.com/";
const ArticleDetails = (history) => {
  const [article, setArticle] = useState(history.location.state);
  useEffect(() => {
    console.log(article);
  }, []);
  return (
    <article className="article full-article done">
      <div className="content phablet-padding-top-10">
        <Link to="/">
          <button
            type="button"
            class="btn btn-dark"
            style={{ marginLeft: "30px", marginTop: "50px" }}
          >
            Go Back
          </button>
        </Link>
        <div className="article-content">
          {article.title && (
            <h1 className="boldest small" itemProp="headline">
              {article.title}
            </h1>
          )}
          {article.headline && (
            <h1 className="boldest small" itemProp="headline">
              {article.headline.main}
            </h1>
          )}

          {article.media && (
            <img
              src={article.media[0]["media-metadata"][1].url}
              alt="Nature"
              className="responsive center"
              width="600"
              height="400"
            />
          )}
          {article.multimedia && (
            <img
              src={url + article.multimedia[0].url}
              alt="Nature"
              className="responsive center"
              width="600"
              height="400"
            />
          )}
          {article.published_date && (
            <p className="meta">
              <strong className="categories"></strong>•{" "}
              <span itemProp="datePublished" content="2020-01-14">
                {article.published_date}
              </span>{" "}
              • {article.byline}
            </p>
          )}

          {article.abstract && <p>{article.abstract}</p>}
          {article.des_facet && (
            <ul style={{ listStyle: "disc" }}>
              {article.des_facet.map((item, index) => {
                return (
                  <li style={{ listStyle: "disc" }} key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          )}

          {article.keywords && (
            <ul style={{ listStyle: "disc" }}>
              {article.keywords.map((item, index) => {
                return (
                  <li style={{ listStyle: "disc" }} key={index}>
                    {item.value}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};
export default ArticleDetails;

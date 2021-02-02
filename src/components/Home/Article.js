import React, { useEffect, useState } from "react";
import { service } from "../../Services/service";
import { Link, useHistory, Redirect } from "react-router-dom";
var image = "https://homepages.cae.wisc.edu/~ece533/images/airplane.png";
const Article = (List) => {
  const [articleList, setArticleList] = useState(List.list);
  const history = useHistory();
  useEffect(() => {
    console.log(List);
  }, []);

  return (
    <ul
      className="flex left fixedSpaces stretch widthchange"
      style={{ width: "108%" }}
    >
      {articleList.length > 0 &&
        articleList.map((item, index) => {
          return (
            <li style={{cursor:'pointer'}}
              onClick={() => {
                history.push({ pathname: "details", state: item });
              }}
              className="col-2-10 desktop-col-1-4 tablet-col-1-2 phone-col-1-1 done"
              key={index}
            >
                <div className="art">
								
              <div
                className="thumbnail"
                style={{
                  backgroundImage: `url(${item.media[0]["media-metadata"][1].url})`,
                }}
              ></div>
              {item.section && <div className="category">{item.section}</div>}
              {item.byline && <div className="meta">{item.byline}</div>}
              {item.title && <h6>{item.title}</h6>}
              </div>
            </li>
          );
        })}
    </ul>
  );
};
export default Article;

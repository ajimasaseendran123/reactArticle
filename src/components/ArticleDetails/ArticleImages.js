import React, { useEffect, useState } from "react";
import { service } from "../../Services/service";
import { Link, useHistory, Redirect } from "react-router-dom";
var image = "https://homepages.cae.wisc.edu/~ece533/images/airplane.png";
const ArticleImages = (array) => {
  const [articleImg, setArticleImg] = useState(array.param["media-metadata"]);
  const history = useHistory();
  useEffect(() => {
    console.log(array.param["media-metadata"]);
  }, []);

  return (
               <img src={articleImg[1].url} alt="Nature" class="responsive center" width="600" height="400"/>
  );
};
export default ArticleImages;

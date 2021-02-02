import React, { useEffect, useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { service } from "../../Services/service";
import image from "../../images/test.png";
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";
var url = "https://static01.nyt.com/";

const Search = (param) => {
  console.log(param.input);
  const [searchList, setSearchList] = useState([]);
  const [message, setMessage] = useState([]);
  const [timeOut, setTimeOut] = useState(0);
  let [color, setColor] = useState("#000");
  let [loading, setLoading] = useState(true);

  const history = useHistory();
  useEffect(() => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    setTimeOut(
      setTimeout(() => {
        service.search(param.input).then((response) => {
          // console.log(response.response.docs);
          if (response.status === "OK") {
            if (response.response.docs) {
              setLoading(false);
              console.log(response.response.docs);
              setSearchList(response.response.docs);
            }
          } else {
            setMessage("No search Result");
          }
        });
      }, 500)
    );
  }, [param]);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: black;
    text-align: center;
    padding-top: 100px;
  `;

  return (
    <ul
      className="flex left fixedSpaces stretch widthchange"
      style={{ width: "108%" }}
    >
      {/* <SyncLoader color={color} loading={loading} css={override} size={20} /> */}
      {searchList.length > 0 ? (
        searchList.map((item, index) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push({ pathname: "details", state: item });
              }}
              className="col-2-10 desktop-col-1-4 tablet-col-1-2 phone-col-1-1 done"
              key={index}
            >
              <div className="art">
                {item.multimedia.length > 0 ? (
                  <div
                    className="thumbnail"
                    style={{
                      backgroundImage: `url(${url + item.multimedia[0].url})`,
                    }}
                  ></div>
                ) : (
                  <div
                    className="thumbnail"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  ></div>
                )}

                {item.section_name && (
                  <div className="category">{item.section_name}</div>
                )}
                {item.headline && (
                  <div className="meta">{item.headline.main}</div>
                )}
                {item.snippet && <h6>{item.snippet}</h6>}
              </div>
            </li>
          );
        })
      ) : (
        <p>{message}</p>
      )}
    </ul>
  );
};
export default Search;

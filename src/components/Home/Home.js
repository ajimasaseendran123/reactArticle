import React, { useEffect, useState } from "react";
import { service } from "../../Services/service";
import { Link, useHistory, Redirect } from "react-router-dom";
import Article from "./Article";
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";
import { Form, FormControl, Button } from "react-bootstrap";
import Search from "./Search";
const Home = () => {
  const [articleList, setArticleList] = useState([]);
  const [timeOut, setTimeOut] = useState(0);
  const [searchList, setSearchList] = useState([]);
  const [input, setInput] = useState([]);
  const [indicator, setIndicator] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000");
  const [typing, setTyping] = useState(false);

  const history = useHistory();
  useEffect(() => {
    initialLoadFunction();
  }, []);

  const initialLoadFunction = () => {
    service.getArticleList().then((response) => {
      setIndicator(false);
      console.log(response);
      if (response.status === "OK") {
        setArticleList(response.results);
        setLoading(false);
      }
    });
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: black;
    text-align: center;
    padding-top: 100px;
  `;

  const onchangeHandler = (e) => {
    setTyping(true);
    const inputValue = e.target.value;
    if (timeOut) {
      clearTimeout(timeOut);
    }
    setTimeOut(
      setTimeout(() => {
        if (inputValue.length > 0) {
          setInput(e.target.value);
          setTyping(false);
            setIndicator(true);
          // debugger
          // service.search(e.target.value).then((response) => {
          //   setTyping(false);
          //   setIndicator(true);
          //   if (response.docs) {
          //     setSearchList(response);
          //   }
          // });
        } else {
          service.getArticleList().then((response) => {
            setIndicator(false);
            console.log(response);
            if (response.status === "OK") {
              setArticleList(response.results);
              setLoading(false);
            }
          });
        }
      }, 500)
    );
  };
  return (
    <section className="popular-articles">
      <div className="content">
        <div className="container">
          <div className="wrap">
            <div className="articles-preview">
              <Form inline style={{paddingLeft:'45px'}}>
                <FormControl
                  onChange={onchangeHandler}
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Form>
              <div className="h2 smallest bolder bold">
                Most Popular Articles
              </div>
              <SyncLoader
                color={color}
                loading={loading}
                css={override}
                size={20}
              />
              {indicator === false && articleList && articleList.length > 0 ? (
                <Article list={articleList} />
              ) : (
                input && <Search input={input} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;

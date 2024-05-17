import React, { useEffect, useState } from "react";
import "./news.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const News = () => {
  const [mynews, setMyNews] = useState([]);
  const fetchData = async () => {
    let resonse = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    let data = await resonse.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h3 style={{ textAlign: "center", marginTop: "3%" }}>
        Daily Top 20 - Headlines
      </h3>
      <h4 style={{ textAlign: "center", marginTop: "3%" }}>
        Consumed News-Api to fetch top 20 news from India
      </h4>
      <div className="mainDiv">
        {mynews.map((ele) => {
          console.log(ele);
          return (
            <>
              <div
                class="card"
                style={{
                  marginTop: "2rem",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <img
                  src={
                    ele.urlToImage == null
                      ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*"
                      : ele.urlToImage
                  }
                  alt="Avatar"
                  style={{ width: "100%" }}
                  class="card-img-top"
                />
                <Link
                  to={ele.url}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontStyle: "italic",
                  }}
                  target="_blank"
                >
                  <div class="container-news">
                    <h5 class="card-title">
                      {ele.author === "" ? "Janelle Ash" : ele.author}
                    </h5>
                    <p class="card-text">{ele.title}</p>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontStyle: "italic",
                      }}
                    >
                      Click to read more..
                    </Link>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;

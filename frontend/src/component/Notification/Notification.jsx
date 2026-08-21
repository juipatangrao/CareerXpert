import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Notification.css";

function Notification() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/news"
      );

      setNews(res.data.articles);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="notification-popup">
      <div className="notification-header">
        <h3>Career News</h3>
      </div>

      <div className="notification-body">

        {loading ? (
          <p className="loading-news">Loading...</p>
        ) : news.length === 0 ? (
          <p className="loading-news">No News Found</p>
        ) : (
          news.map((item, index) => (
            <div className="notification-item" key={index}>

              <img
                src={item.image}
                alt=""
                className="news-image"
              />

              <div className="news-content">

                <h4>{item.title}</h4>

                <p>{item.description}</p>

                <span>{item.source.name}</span>

                <br />

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More →
                </a>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Notification;
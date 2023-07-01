import React from "react";
import "../news/news.scss";
import Footer from "../footer/footer";

export default class News extends React.Component {
  render() {
    return (
      <>
        <section className="news">
          <div className="containerNews">
            <div className="getNews">
              <h6>Subscribe to get the Latest News</h6>
              <p>
                We recommended you to subscribe to our newspaper,drop your email
                below to get daily update about us
              </p>
              <div>
                <span>Enter your email addres</span>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </>
    );
  }
}

import React from "react";
import Logo from "../assets/Logo.png";
import MainPhoto from "../assets/mainphoto.png";

import "../main/header.scss";
import "../main/main.scss";
export default class Main extends React.Component {
  render() {
    return (
      <>
        <section className="mainPage">
          <header>
            <img src={Logo} alt="" />
            <div className="links">
              <div className="link">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Service</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
              </div>
              <button>Contact Us</button>
              <div class="cont">
                <a id="menu-toggle" class="menu-toggle">
                  <span class="menu-toggle-bar menu-toggle-bar--top"></span>
                  <span class="menu-toggle-bar menu-toggle-bar--middle"></span>
                  <span class="menu-toggle-bar menu-toggle-bar--bottom"></span>
                </a>
              </div>
            </div>
          </header>

          <div className="virtualReality">
            <div className="show">
              <h1>Virtual Reality Business Solutions</h1>
              <span>
                We have over 15 year exprience in business consultting arena. We
                have over <br /> 15 year exprience in business consultting arena
                and artficial intelligence.
              </span>
              <div className="ourGroup">
                <button>Join Us</button>
                <button>Watch video</button>
              </div>
            </div>

            <img src={MainPhoto} alt="" />
          </div>
        </section>
      </>
    );
  }
}

import React from "react";
import Logo from "../assets/Logo.png";
import Skype from "../assets/skype.png";
import Linkedin from "../assets/Linkedin.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/twitter.png";
import "../footer/footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <section className="footer">
          <div className="linksForContact">
            <div className="texts">
              <img src={Logo} alt="" />
              <p>Dhaka, Bangladesh</p>
              <p>0943833399</p>
              <p>support@zone.com</p>
              <div className="link">
                <img src={Skype} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
              </div>
            </div>

            <div className="link">
              <div>
                <p>Service</p>
                <p>Order Managment</p>
                <p>Social Assistant</p>
                <p>Crypto Platform</p>
                <p>Analyzer of the News</p>
              </div>
              <div>
                <p>Company</p>
                <p>About Us</p>
                <p>News</p>
                <p>Our trusted partner</p>
                <p>New users FAQ</p>
              </div>
            </div>

            <div className="link">
              <div>
                <p>Supports</p>
                <p>hepl center</p>
                <p>FeedBack</p>
                <p>Contact us</p>
                <p>Terms conditions</p>
              </div>
              <div>
                <p>Resources</p>
                <p>Download app</p>
                <p>Blog</p>
                <p>What's new</p>
                <p>Sitemap</p>
              </div>
            </div>
          </div>

          <footer>
            <span>© 2021 Zone. - All rights reserved.</span>
            <div>
              <span>Privacy</span>
              <span>Security</span>
              <span>Terms</span>
            </div>
          </footer>
        </section>
      </>
    );
  }
}

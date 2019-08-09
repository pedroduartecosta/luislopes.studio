import React, { Component } from "react";
import Mail from "../../images/icons/mail.svg";
import Linkedin from "../../images/icons/linkedin.svg";
import Instagram from "../../images/icons/instagram.svg";
import Behance from "../../images/icons/behance.svg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__logo">
          <h4>Copyright © 2018</h4>
        </div>
        <div className="footer__links">
          <a
            href="mailto:works@luislopes.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Mail} alt="Mail" />
          </a>
          <a
            href="https://linkedin.com/in/luislopesstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/luispfmlopes"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://behance.net/luislopesstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Behance} alt="Behance" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;

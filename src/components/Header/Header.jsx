import React, { Component } from "react";
import { Link } from "gatsby";

import Mail from "../../images/icons/mail.svg";
import Linkedin from "../../images/icons/linkedin.svg";
import Instagram from "../../images/icons/instagram.svg";
import Behance from "../../images/icons/behance.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <h4>Luís Lopes</h4>
          </Link>
        </div>
        <div className="header__links">
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

export default Header;

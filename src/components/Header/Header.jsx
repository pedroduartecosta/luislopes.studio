import React, { Component } from "react";
import { Link } from "gatsby";

import Mail from "../../images/icons/mail.svg";
import Twitter from "../../images/icons/twitter.svg";
import Linkedin from "../../images/icons/linkedin.svg";
import Facebook from "../../images/icons/facebook.svg";
import Instagram from "../../images/icons/instagram.svg";
import Unsplash from "../../images/icons/unsplash.svg";
import Github from "../../images/icons/github.svg";

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
            href="https://www.twitter.com/luislopes"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            href="https://de.linkedin.com/in/luislopes"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://www.facebook.com/luislopes"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/luislopes"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://unsplash.com/@luislopes"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Unsplash} alt="Unsplash" />
          </a>
          <a
            href="https://www.github.com/luislopes"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Github} alt="Github" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;

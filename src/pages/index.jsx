import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../layout";
import SEO from "../components/SEO/SEO";

import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <div className="section">
            <div className="section__label">
              <p>About</p>
              <span />
            </div>
            <div className="section__content">
              <p>
                Hey, I’m Luís and I create media content.<br />Check out
                some of my{" "}
                <Link to="/projects" className="text-link">
                  projects
                </Link>. I’m a photography enthusiast and every once in a
                while I take some{" "}
                <Link to="/photo" className="text-link">
                  photos
                </Link>.
              </p>
            </div>
          </div>
          <div className="section">
            <div className="section__label">
              <p>Photos</p>
              <span />
            </div>
            <div className="section__content">
              <div className="photo-grid">
                <div className="photo-grid__photo">
                  <div className="photo-grid__photo__wrapper">
                    <Img
                      sizes={this.props.data.bavaria1.childImageSharp.fluid}
                    />
                  </div>
                </div>
                <div className="photo-grid__photo">
                  <div className="photo-grid__photo__wrapper">
                    <Img
                      sizes={this.props.data.bavaria2.childImageSharp.fluid}
                    />
                  </div>
                </div>
                <div className="photo-grid__photo">
                  <div className="photo-grid__photo__wrapper">
                    <Img 
                      sizes={this.props.data.bavaria3.childImageSharp.fluid} />
                  </div>
                </div>
                <div className="photo-grid__photo">
                  <div className="photo-grid__photo__wrapper">
                    <Img 
                      sizes={this.props.data.bavaria4.childImageSharp.fluid} />
                  </div>
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo">More photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__label">
              <p>Daily UI</p>
              <span />
            </div>
            <div className="section__content">
              <div className="photo-grid">
                <div className="photo-grid__photo">
                  <div className="photo-grid__photo__wrapper">
                    <Img
                      sizes={this.props.data.dailyui9.childImageSharp.fluid}
                    />
                  </div>
                </div>
                <div className="photo-grid__photo">
                  <div className="photo-grid__photo__wrapper">
                    <Img
                      sizes={this.props.data.dailyui6.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </div>
              <div className="more-link">
                <Link to="/dailyui">See all shots</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__label">
              <p>Music</p>
              <span />
            </div>
            <div className="section__content">
              <div className="music-grid">
                <div className="music-grid__track">
                  <div className="music-grid__track__wrapper">
                    <a
                      href="https://soundcloud.com/butimood/buti-moin-moin-butimoods-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Img
                        sizes={this.props.data.butimoin.childImageSharp.fluid}
                      />
                    </a>
                  </div>
                </div>
                <div className="music-grid__track">
                  <div className="music-grid__track__wrapper">
                    <a
                      href="https://soundcloud.com/butimood/buti-anubis-butimoods-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Img
                        sizes={this.props.data.butianubis.childImageSharp.fluid}
                      />
                    </a>
                  </div>
                </div>
                <div className="music-grid__track">
                  <div className="music-grid__track__wrapper">
                    <a
                      href="https://soundcloud.com/butimoods/neon-butimoods-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Img
                        sizes={this.props.data.butineon.childImageSharp.fluid}
                      />
                    </a>
                  </div>
                </div>
                <div className="music-grid__track">
                  <div className="music-grid__track__wrapper">
                    <a
                      href="https://soundcloud.com/butimoods/slowpoke-butimoods-5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Img
                        sizes={
                          this.props.data.butislowpoke.childImageSharp.fluid
                        }
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__label">
              <p>Contact</p>
              <span />
            </div>
            <div className="section__content section__content--secondary">
              <p>
                Want to get in touch?<br />Shoot me a{" "}
                <a
                  href="mailto:works@luislopes.studio"
                  className="text-link"
                >
                  mail
                </a>{" "}
                or add me on{" "}
                <a
                  href="https://de.linkedin.com/in/luislopes"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  linkedin
                </a>.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    bavaria1: file(relativePath: { eq: "photos/bavaria-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bavaria2: file(relativePath: { eq: "photos/bavaria-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bavaria3: file(relativePath: { eq: "photos/bavaria-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bavaria4: file(relativePath: { eq: "photos/bavaria-05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dailyui6: file(relativePath: { eq: "dailyui/daily-06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dailyui9: file(relativePath: { eq: "dailyui/daily-09.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    butimoin: file(relativePath: { eq: "cover/buti-moin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    butianubis: file(relativePath: { eq: "cover/buti-anubis.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    butineon: file(relativePath: { eq: "cover/buti-neon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    butislowpoke: file(relativePath: { eq: "cover/buti-slowpoke.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

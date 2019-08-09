import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../layout";

import config from "../../data/SiteConfig";

class PhotoPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="about-container">
          <Helmet title={`${config.siteTitle} | Photos`} />

          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Angola</h1>
                <h2>2019</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.angola1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.angola10.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.angola11.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.angola16.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.angola18.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/angola">more photos</Link>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Czech Republic</h1>
                <h2></h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.czech1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.czech2.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.czech3.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.czech4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.czech5.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/czech">more photos</Link>
              </div>
            </div>
          </div>




          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Poland</h1>
                <h2></h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.poland1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.poland2.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.poland3.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.poland4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.poland5.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/poland">more photos</Link>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Zambujeira</h1>
                <h2></h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.zambujeira1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.zambujeira2.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.zambujeira3.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.zambujeira4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.zambujeira5.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/zambujeira">more photos</Link>
              </div>
            </div>
          </div>

          
        </div>
      </Layout>
    );
  }
}

export default PhotoPage;

/* eslint no-undef: "off" */
export const photosQuery = graphql`
  query PhotosQuery {
    angola1: file(relativePath: { eq: "photos/angola/angola-001.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    angola2: file(relativePath: { eq: "photos/angola/angola-002.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    angola10: file(relativePath: { eq: "photos/angola/angola-010.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    angola11: file(relativePath: { eq: "photos/angola/angola-011.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    angola16: file(relativePath: { eq: "photos/angola/angola-016.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    angola18: file(relativePath: { eq: "photos/angola/angola-018.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    czech1: file(relativePath: { eq: "photos/czech/czech-006.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    czech2: file(relativePath: { eq: "photos/czech/czech-002.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    czech3: file(relativePath: { eq: "photos/czech/czech-003.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    czech4: file(relativePath: { eq: "photos/czech/czech-004.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    czech5: file(relativePath: { eq: "photos/czech/czech-005.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    poland1: file(relativePath: { eq: "photos/poland/poland-001.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    poland2: file(relativePath: { eq: "photos/poland/poland-002.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    poland3: file(relativePath: { eq: "photos/poland/poland-003.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    poland4: file(relativePath: { eq: "photos/poland/poland-004.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    poland5: file(relativePath: { eq: "photos/poland/poland-005.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    zambujeira1: file(relativePath: { eq: "photos/zambujeira/zambujeira-001.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    zambujeira2: file(relativePath: { eq: "photos/zambujeira/zambujeira-002.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    zambujeira3: file(relativePath: { eq: "photos/zambujeira/zambujeira-006.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    zambujeira4: file(relativePath: { eq: "photos/zambujeira/zambujeira-004.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    zambujeira5: file(relativePath: { eq: "photos/zambujeira/zambujeira-005.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }



  }
`;

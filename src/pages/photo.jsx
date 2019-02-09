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




  }
`;

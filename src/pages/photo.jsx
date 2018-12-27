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
                <h1>Bavaria</h1>
                <h2>2016</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.bavaria1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.bavaria2.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.bavaria3.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.bavaria4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.bavaria5.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/bavaria">more photos</Link>
              </div>
            </div>
          </div>


          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Bavaria</h1>
                <h2>2016</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.bavaria1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.bavaria2.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.bavaria3.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.bavaria4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.bavaria5.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/bavaria">more photos</Link>
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
    bavaria4: file(relativePath: { eq: "photos/bavaria-04.jpg" }) {
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
    bavaria1: file(relativePath: { eq: "photos/bavaria-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bavaria5: file(relativePath: { eq: "photos/bavaria-05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

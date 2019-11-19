import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import { graphql } from "gatsby";
import About from "../components/About";
import config from "../../data/SiteConfig";

const AboutPage = props => {
  const { data } = props;
  return (
    <Layout>
      <Helmet title={`About | ${config.siteTitle}`} />
      <About data={data} />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  {
    images: allFile(
      filter: { relativeDirectory: { eq: "images/us" }, childImageSharp: {} }
    ) {
      edges {
        node {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

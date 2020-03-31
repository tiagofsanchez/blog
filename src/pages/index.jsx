import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import SimplePostListing from "../components/SimplePostListing";
import SEO from "../components/SEO/SEO";
import BigAvatar from "../components/Avatar/BigAvatar";
import config from "../../data/SiteConfig";
import AllCategories from "../components/AllCategories";
import MailListForm from "../components/Form/mailListForm";
import Projects from "../components/projects";
import styled from '@emotion/styled';

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const Section = styled.section`
margin: 0px 0px 60px 0px;

`

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges;

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <Section>
          <BigAvatar />
        </Section>
        <Section >
          <Styled.h1>I write about</Styled.h1>
          <AllCategories />
        </Section>
        <Section >
          <Styled.h1>Check out my latest posts</Styled.h1>
          <div sx={{ marginBottom: `10px` }}>
            <SimplePostListing postEdges={postEdges} />
          </div>
          <Styled
            as={Link}
            to={"/blog"}
            sx={{
              color: `primary`,
        
              textDecoration: `none`,
              fontSize: 26,
              borderRadius: `5px`,
              p: `5px`,
              ":hover": {
                bg: `muted`,
              }
            }}
          >
            More posts&#8594;
          </Styled>
        </Section>
        <Section>
          <Styled.h1>Project sample</Styled.h1>
          <Projects />
        </Section>
        <Section>
          <MailListForm formType={"homePage"} />
        </Section>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      limit: 5
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { publish: { eq: "yes" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            category
            title
            tags
            date
            thumbnail {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

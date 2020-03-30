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
import Projects from '../components/projects';


/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges;

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <section>
          <BigAvatar />
        </section>
        <section sx={{ mt: `60px` }}>
          <Styled.h1>I write about</Styled.h1>
          <AllCategories />
        </section>
        <section sx={{ my: `40px` }}>
          <Styled.h1>Check out my latest posts</Styled.h1>
          <div sx={{marginBottom: `10px`}}>
          <SimplePostListing postEdges={postEdges} />
          </div>
          <Styled
            as={Link}
            to={"/blog"}
            sx={{
              bg: `muted`,
              color: `text`,
              textDecoration: `none`,
              fontSize: 26,
              borderRadius: `5px`,
              p: `5px`, 
              ":hover": {
                bg: `primary`,
                p: 1,
                color: `black`
  
              }
            }}
          >
            More posts&#8594;
          </Styled>
        </section>
         
      
        <section>
          <Projects />
          </section>    
        <section>
          <MailListForm formType={"homePage"} />
        </section>
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

import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import { Styled, jsx} from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from '@emotion/styled'

import Layout from "../layout";
import PostHeader from "../components/PostHeader";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import SmallAvatar from "../components/Avatar/SmallAvatar";
// import { editOnGithub } from "../utils/global";
import MailListForm from "../../src/components/Form/mailListForm.js";

const ThumbnailContainer = styled.div`
width: 90px; 
margin-right: 15px;
flex: 0 0 90px;
@media (max-width: 420px) { 
  margin-bottom: 10px
}
`
const Flex = styled.div`
display: flex;
align-items: center;
@media (max-width: 420px) {
  flex-direction: column;
  align-items: center;
}
`

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.mdx;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    //NOTE: STUFF WIP to implement edit by anyone
    // console.log(post);
    // console.log(editOnGithub(post));

    //NOTE: Need to review all of this things and how data is flowing here
    //transforming my data from post into and Array so that I can loop through it
    const postNodeWip = [];
    postNodeWip.push(postNode);

    const postWip = [];
    postNodeWip.forEach(post => {
      postWip.push({
        category: post.frontmatter.category,
        timeToRead: post.timeToRead,
        tags: post.frontmatter.tags,
        date: post.fields.date
      });
    });

    let thumbnail = null;
    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fluid;
    }

    return (
      <Layout>
        <Helmet>
          <title>{` ${config.siteTitle} | ${post.title} `}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <Flex>
            {thumbnail ? (
              <ThumbnailContainer>
              <Img
                fluid={thumbnail}
                alt="thumbnail"
              />
              </ThumbnailContainer>
            ) : null}
            <div>
              <Styled.h1 sx={{ mb: 0, mt: 0 }}>{post.title}</Styled.h1>
              <PostHeader post={postWip[0]} />
            </div>
          </Flex>

          <MDXRenderer>{postNode.body}</MDXRenderer>
          <SocialLinks postPath={slug} postNode={postNode} />
          <SmallAvatar />
          <MailListForm formType={"homePage"} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      rawBody
      body
      timeToRead
      excerpt
      frontmatter {
        title
        date
        category
        tags
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

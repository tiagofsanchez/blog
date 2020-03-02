import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";

/** @jsx jsx */
import { Styled, jsx, Flex } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../layout";
import PostHeader from "../components/PostHeader";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import SmallAvatar from "../components/Avatar/SmallAvatar";
import { editOnGithub } from "../utils/global";
import MailListForm from "../../src/components/Form/mailListForm.js";

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
      thumbnail = post.thumbnail.childImageSharp.fixed;
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <Flex sx={{ alignItems: `center`, flexWrap: `wrap` }}>
            {thumbnail ? (
              <Img
                fixed={thumbnail}
                alt="thumbnail"
                sx={{
                  borderRadius: `5px`,
                  marginRight: `20px`,
                  flex: `0 1 90px`
                }}
              />
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
            fixed(width: 90, height: 90) {
              ...GatsbyImageSharpFixed
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

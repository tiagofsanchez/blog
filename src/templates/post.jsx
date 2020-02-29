import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
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

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <Styled.h1 sx={{ mb: 0, fontSize: 60 }}>{post.title}</Styled.h1>
          <PostHeader post={postWip[0]} />
          <MDXRenderer>{postNode.body}</MDXRenderer>
          <SocialLinks postPath={slug} postNode={postNode} />
          <SmallAvatar />
          <MailListForm />
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
        thumbnail
      }
      fields {
        slug
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

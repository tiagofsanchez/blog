import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx, Flex } from "theme-ui";

import PostHeader from "./PostHeader";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        category: postEdge.node.frontmatter.category,
        thumbnail: postEdge.node.frontmatter.thumbnail
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();

    return (
      <div>
        {postList.map(post => {
          let thumbnail = null;
          if (post.thumbnail) {
            thumbnail = post.thumbnail.childImageSharp.fixed;
          }
          return (
            <Styled key={post.title} sx={{ mb: "40px" }}>
              <Flex sx={{ flexWrap: `wrap`, alignItems: `center` }}>
                {thumbnail ? (
                  <Img
                    fixed={thumbnail}
                    alt="thumbnail"
                    sx={{
                      borderRadius: `5px`,
                      marginRight: `10px`,
                      flex: `0 1 50px`
                    }}
                  />
                ) : null}
                <Styled.h1 sx={{ mb: `-0.1px`, mt: 0 }}>
                  <Styled.a
                    as={Link}
                    to={post.path}
                    sx={{ textDecoration: `none` }}
                  >
                    {post.title}
                  </Styled.a>
                </Styled.h1>
              </Flex>
              <PostHeader post={post} />
              <Styled.p sx={{ mt: -1 }}>{post.excerpt}</Styled.p>
            </Styled>
          );
        })}
      </div>
    );
  }
}

export default PostListing;

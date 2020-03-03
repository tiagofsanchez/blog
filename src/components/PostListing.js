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
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
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
            <Styled
              key={post.title}
              sx={{
                mb: 10,
                p: `10px 20px 10px 20px`,
                ":hover": {
                  borderRadius: `10px`,
                  boxShadow: "0 0 1px 2px rgba(0, 0, 0, .125)",
                  bg: "muted"
                }
              }}
            >
              <Styled.a
                as={Link}
                to={post.path}
                sx={{ textDecoration: `none` }}
              >
                <Flex sx={{ flexWrap: `wrap`, alignItems: `center` }}>
                  {thumbnail ? (
                    <Img
                      fixed={thumbnail}
                      alt="thumbnail"
                      sx={{
                        borderRadius: `4px`,
                        marginRight: `10px`,
                        flex: `0 1 40px`
                      }}
                    />
                  ) : null}
                  <Styled.h1 sx={{ mb: `-0.1px`, mt: 0 }}>
                    {post.title}
                  </Styled.h1>
                </Flex>
                <PostHeader post={post} />
                <Styled.p sx={{ mt: -1, color: `text` }}>
                  {post.excerpt}
                </Styled.p>
              </Styled.a>
            </Styled>
          );
        })}
      </div>
    );
  }
}

export default PostListing;

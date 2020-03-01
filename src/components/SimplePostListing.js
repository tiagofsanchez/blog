/** @jsx jsx */
import { Styled, jsx, Flex } from "theme-ui";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PostHeader from "./PostHeader";

class PostListing extends React.Component {
  getPostList() {
    const { postEdges } = this.props;
    const postList = postEdges.map(postEdge => {
      return {
        path: postEdge.node.fields.slug,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        thumbnail: postEdge.node.frontmatter.thumbnail
      };
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    console.log(postList);

    return (
      <div>
        {postList.map(post => {
          let thumbnail;
          if (post.thumbnail) {
            thumbnail = post.thumbnail.childImageSharp.fixed;
          }
          return (
            <Fragment key={post.title}>
              <Styled.a
                as={Link}
                to={post.path}
                sx={{ textDecoration: `none` }}
              >
                <Flex
                  sx={{
                    alignItems: `center`,
                    padding: `10px`,
                    ":hover": {
                      borderRadius: `10px`,
                      boxShadow: "0 0 1px 2px rgba(0, 0, 0, .125)",
                      bg: "muted"
                    }
                  }}
                >
                  {thumbnail ? (
                    <Img
                      fixed={thumbnail}
                      alt="thumbnail"
                      sx={{ borderRadius: `5px`, marginRight: `15px` }}
                    />
                  ) : (
                    <div />
                  )}
                  <Styled>
                    <Styled.h2>{post.title}</Styled.h2>
                    <PostHeader post={post} />
                  </Styled>
                </Flex>
              </Styled.a>
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default PostListing;

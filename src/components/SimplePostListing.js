/** @jsx jsx */
import { Styled, jsx, Flex } from "theme-ui";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";
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

    return (
      <div>
        {postList.map(post => {
          let thumbnail;
          if (post.thumbnail) {
            thumbnail = post.thumbnail.childImageSharp.fixed;
          }

          const newest = moment(post.date) > moment().subtract(1, "months");

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
                    width: `100%`,
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
                  ) : null}

                  <Flex
                    sx={{
                      width: `100%`,
                      alignItems: `center`,
                      justifyContent: `space-between`
                    }}
                  >
                    <div>
                      <Styled.h2>{post.title}</Styled.h2>
                      <PostHeader post={post} noDate />
                    </div>
                    {newest ? (
                      <Styled
                        sx={{
                          mr: 20,
                          bg: `muted`,
                          p: `5px 10px 5px 10px`,
                          borderRadius: 4
                        }}
                      >
                        New
                      </Styled>
                    ) : null}
                  </Flex>
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

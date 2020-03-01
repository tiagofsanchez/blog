import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTages from "./PostTags";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const PostHeader = props => {
  const { post } = props;

  return (
    <div sx={{ mb: `-1px` }}>
      <div
        sx={{ display: `flex`, flexDirection: `column`, color: "secondary" }}
      >
        <small>
          {post.date} / {post.timeToRead} minute(s) reading time
        </small>
        <div
          sx={{
            display: `flex`,
            flexWrap: `wrap`,
            mt: 2,
            alignItems: `baseline`
          }}
        >
          {post.category ? (
            <Styled.p
              as={Link}
              sx={{
                color: `primary`,
                textDecoration: `none`,
                border: `solid 1px`,
                boxSizing: `content-box`,
                display: `inline-block`,
                px: `4px`,
                borderRadius: `5px`,
                p: 1,
                mb: `10px`,
                mr: 2,
                fontWeight: `bold`
              }}
              to={`/categories/${_.kebabCase(post.category)}/`}
            >
              {post.category}
            </Styled.p>
          ) : null}
          {post.tags ? <PostTages tags={post.tags} /> : null}
        </div>
      </div>
    </div>
  );
};

export default PostHeader;

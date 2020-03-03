import React, { Fragment } from "react";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const CatTagHeader = props => {
  const { tag, category } = props;

  const tagHeader = (
    <Fragment>
      <Styled.h1 sx={{ mr: 2 }}>Post(s) tagged as</Styled.h1>
      <Styled.h1
        sx={{
          color: `text`,
          mr: 1,
          p: `2px 5px 2px 5px`,
          borderRadius: `4px`,
          bg: `muted`
        }}
      >
        {tag}
      </Styled.h1>
    </Fragment>
  );

  const catHeader = (
    <Fragment>
      <Styled.h1 sx={{ mr: 2 }}>Post(s) category as</Styled.h1>
      <Styled.h1
        sx={{
          color: `primary`,
          textDecoration: `none`,
          border: `solid 1px`,
          boxSizing: `content-box`,
          display: `inline-block`,
          px: `4px`,
          borderRadius: `5px`,
          p: 1,
          mr: 2
        }}
      >
        {category}
      </Styled.h1>
    </Fragment>
  );

  return (
    <Styled
      sx={{
        display: `flex`,
        textAlign: `center`,
        alignItems: `baseline`,
        mb: 50,
        color: `primary`
      }}
    >
      {tag ? tagHeader : catHeader}
    </Styled>
  );
};

export default CatTagHeader;

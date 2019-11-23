import React from "react";
import siteConfig from "../../../data/SiteConfig";

/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const SmallAvatar = props => {
  const { avatar } = siteConfig;

  return (
    <>
      <Styled
        sx={{
          color: `primary`,
          mt: 4,
          borderTop: `1px solid`,
          pt: "15px"
        }}
      />
      <div sx={{ display: `flex`, alignItems: `center`, mb: 2, mt: 2 }}>
        <img
          src={avatar.photo}
          sx={{ width: 70, height: 70, borderRadius: 999, mr: `15px` }}
          alt="my picture"
        />
        <Styled.p>{avatar.description}</Styled.p>
      </div>
      <div sx={{ textAlign: `left` }} />
    </>
  );
};

export default SmallAvatar;

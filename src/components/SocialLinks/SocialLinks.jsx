import React, { Component } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
    const iconSize = mobile ? 30 : 50;
    const fillColor = "#999999";
    const BgStyle = { fill: "#999999", r: 0 };
    const filter = count => (count > 0 ? count : "");
    const renderShareCount = count => <div>{filter(count)}</div>;

    const reddit = (
      <div>
        <RedditShareButton
          url={url}
          title={post.title}
          sx={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            cursor: `pointer`
          }}
        >
          <RedditIcon
            round
            size={iconSize}
            logoFillColor={fillColor}
            iconBgStyle={BgStyle}
          />
          <RedditShareCount
            url={url}
            sx={{
              color: fillColor,
              fontSize: 16,
              fontWeight: `bold`
            }}
          >
            {count => renderShareCount(count)}
          </RedditShareCount>
        </RedditShareButton>
      </div>
    );

    const twitter = (
      <TwitterShareButton
        url={url}
        title={post.title}
        sx={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          cursor: `pointer`
        }}
      >
        <TwitterIcon
          round
          size={iconSize}
          size={iconSize}
          logoFillColor={fillColor}
          iconBgStyle={BgStyle}
        />
      </TwitterShareButton>
    );

    const facebook = (
      <FacebookShareButton
        url={url}
        quote={postNode.excerpt}
        sx={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          cursor: `pointer`
        }}
      >
        <FacebookIcon
          round
          size={iconSize}
          size={iconSize}
          logoFillColor={fillColor}
          iconBgStyle={BgStyle}
        />
        <FacebookShareCount url={url}>
          {count => renderShareCount(count)}
        </FacebookShareCount>
      </FacebookShareButton>
    );

    const linkedIn = (
      <LinkedinShareButton
        url={url}
        title={post.title}
        description={postNode.excerpt}
        sx={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          cursor: `pointer`
        }}
      >
        <LinkedinIcon
          round
          size={iconSize}
          size={iconSize}
          logoFillColor={fillColor}
          iconBgStyle={BgStyle}
        />
      </LinkedinShareButton>
    );

    return (
      <div sx={{ display: `flex`, ml: `-16px` }}>
        {linkedIn}
        {facebook}
        {reddit}
        {twitter}
      </div>
    );
  }
}

export default SocialLinks;

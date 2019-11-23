import React, { Component } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
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
    const iconSize = mobile ? 30 : 30;
    const filter = count => (count > 0 ? count : "");
    const renderShareCount = count => <div>{filter(count)}</div>;

    const reddit = (
      <div>
        <RedditShareButton
          url={url}
          title={post.title}
          sx={{
            mr: 3,
            display: `flex`,
            flexDirection: `column`,
            alignContent: `center`
          }}
        >
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => renderShareCount(count)}
          </RedditShareCount>
        </RedditShareButton>
      </div>
    );

    const twitter = (
      <TwitterShareButton url={url} title={post.title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
    );

    const facebook = (
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <FacebookIcon round size={iconSize} />
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
      >
        <LinkedinIcon round size={iconSize} />
      </LinkedinShareButton>
    );

    const telegram = (
      <TelegramShareButton url={url}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>
    );

    return (
      <div sx={{ display: `flex`, mt: `50px` }}>
        {reddit}
        {twitter}
      </div>
    );
  }
}

export default SocialLinks;

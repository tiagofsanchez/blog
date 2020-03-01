const config = {
  siteTitle: "tiagofsanchez", // Site title.
  siteTitleShort: "tiago's page", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Tiago's blog!", // Alternative site title for SEO.
  siteLogo: "https://avatars1.githubusercontent.com/u/11288873?s=400&v=4", // Logo used for SEO and manifest.
  siteUrl: "https://tiagofsanchez.com/", // Domain of your website without pathPrefix.
  pathPrefix: "/tiagofsanchez", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A blog about react, innovation, travel and other stuff", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-153307362-1", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "", // Username to display in the author segment.
  userEmail: "", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  repo: "https://github.com/tiagofsanchez/blog",
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  avatar: {
    description:
      "I am learning to code ReactJS (from scratch) and I have built this blog to share that journey and to put ✒️'pen to paper' on stuff that I like to do and to think about!",
    photo: "https://avatars1.githubusercontent.com/u/11288873?s=400&v=4"
  },
  userLinks: [
    {
      label: "github",
      url: "https://github.com/tiagofsanchez/"
    },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/tiagofsanchez/"
    },
    {
      label: "email",
      url: "mailto:tiagofsanchez@gmail.com"
    }
  ],

  menuLinks: [
    {
      name: "Me",
      url: "/about"
    },
    {
      name: "Articles",
      url: "/blog"
    }
  ],
  copyright: "Copyright © 2019. tfs", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;

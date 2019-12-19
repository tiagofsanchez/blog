import urljoin from "url-join";
import config from "../../data/SiteConfig";
import moment from "moment";

const URLify = string => {
  return string.trim().replace(/\s/g, "%20");
};

const editOnGithub = post => {
  const date = moment.utc(post.date).format(config.dateFromFormat);
  const slug = URLify(post.title);
  return urljoin(
    config.repo,
    "/blob/master/content/posts",
    `${date}-${slug}.md`
  );
};

export { editOnGithub };

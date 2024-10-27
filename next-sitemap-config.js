/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL ||
    "https://silbye.github.io/sergey-salnikov-portfolio-website/",
  generateRobotsTxt: true, // (optional)
  // ...other options
};

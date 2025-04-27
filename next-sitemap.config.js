const config = {
  siteUrl: process.env.DOMAIN || "https://sahilshrestha.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,  // Important ✅
  sitemapSize: 7000,
  outDir: "./public",           // Important ✅
};

export default config;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sahiltuchheshrestha.com.np',
  generateRobotsTxt: true,
  outDir: './public',
  exclude: ['/api/*', '/_*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://sahiltuchheshrestha.com.np/sitemap-0.xml',
      'https://sahiltuchheshrestha.com.np/sitemap-1.xml'
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
}

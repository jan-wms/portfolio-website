module.exports = {
  siteMetadata: {
    title: `portfolio-website`,
    siteUrl: `https://janw.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:200,300,400,600,700,900`,
        ],
      }
    }
  ],
}

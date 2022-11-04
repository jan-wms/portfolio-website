module.exports = {
  siteMetadata: {
    title: `portfolio-website`,
    siteUrl: `https://janw.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:200,300,400,600,700,900`,
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
  ],
}

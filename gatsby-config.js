module.exports = {
  siteMetadata: {
    title: `Jan Wermeckes`,
    siteUrl: `https://wermeckes.com`,
    description: `I'm Jan, an enthusiastic programmer and mountaineer from Germany. | Portfolio website Jan Wermeckes`,
    image: `/assets/favicon.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          '/success'
        ]
      }
    },
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jan Wermeckes`,
        short_name: `Jan Wermeckes`,
        description: `I'm Jan, an enthusiastic programmer and mountaineer from Germany. | Portfolio website Jan Wermeckes`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `static/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `nunito\:200,300,400,600,700,900`,
          `fredoka one\:400`,
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-transformer-json`,
  ],
}

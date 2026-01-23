require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Jan Wermeckes • Software-Entwickler`,
    siteUrl: `https://wermeckes.com`,
    description: `Ich bin Jan, 22 Jahre alt. Begeisterter Programmierer und Bergsteiger aus Deutschland. | Portfolio-Website Jan Wermeckes`,
    image: `/assets/favicon.png`,
  },
  plugins: [
    `react-github-btn`,
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
        name: `Jan Wermeckes • Software-Entwickler`,
        short_name: `Jan Wermeckes`,
        description: `Ich bin Jan, 22 Jahre alt. Begeisterter Programmierer und Bergsteiger aus Deutschland. | Portfolio-Website Jan Wermeckes`,
        lang: `de`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `static/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.TOKEN,
        variables: {},
        graphQLQuery: `
        query {
          user(login: "jan-wms") {
            repositories(first: 100) {
              edges {
                node {
                  description
                  forkCount
                  isPrivate
                  name
                  primaryLanguage {
                    color
                    name
                  }
                  repositoryTopics(first: 10) {
                    edges {
                      node {
                        topic {
                          name
                        }
                      }
                    }
                  }
                  stargazerCount
                }
              }
            }
          }
        }
        `,
      }
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
        name: `repos`,
        path: `${__dirname}/src/data/repos/`,
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

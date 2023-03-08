require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `portfolio-website`,
    siteUrl: `https://wermeckes.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `react-github-btn`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.TOKEN,
        variables: {},
        graphQLQuery: `
        query {
          user(login: "jan2210") {
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
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/static/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `githubRepos`,
        path: `${__dirname}/static/githubRepos/`,
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

import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby'
import React from 'react'
import GithubCard from './githubCard/githubCard';
import * as styles from './githubSection.module.css'

const GithubSection = () => {
    const githubReposData = useStaticQuery(graphql`
    query GithubReposQuery {
        allGithubReposJson {
          edges {
            node {
              repoName
              title
            }
          }
        }
      }
  `);

    return (
        <section className={styles.githubSection} id='github'>
            <div className={styles.title}>
                <a href='https://www.github.com/jan2210/' target="_blank" rel="noreferrer"></a>
                <h2>Git<br />Hub</h2>
            </div>

            <div className={styles.cards}>
                {
                    githubReposData.allGithubReposJson.edges.map((item, index) => {
                        return (
                            <GithubCard repoName={item.node.repoName} key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default GithubSection
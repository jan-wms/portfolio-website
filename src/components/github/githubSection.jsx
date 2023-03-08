import { useStaticQuery } from 'gatsby';
import React from 'react'
import GithubCard from './githubCard/githubCard';
import * as styles from './githubSection.module.css'

const GithubSection = () => {
   /* const githubReposData = useStaticQuery(graphql`
  query GithubReposQuery {
    allProjectsJson {
      edges {
        node {
          title
          repoName
        }
      }
    }
    }
  `);*/

    return (
        <section className={styles.githubSection}>
            <div className={styles.title}>
                <h2>GitHub</h2>
            </div>

            <div className={styles.cards}>



                {/*
                    githubData.allProjectsJson.edges.map((item, index) => {
                        return (
                            <GithubCard repoName={item.node.repoName} key={index} />
                        )
                    })
                */ }



            </div>
        </section>
    )
}

export default GithubSection
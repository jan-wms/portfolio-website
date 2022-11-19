import React from 'react'
import * as styles from './githubCard.module.css'
import { GoRepo } from "@react-icons/all-files/go/GoRepo"
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar"
import { useStaticQuery, graphql } from "gatsby"
import GitHubButton from 'react-github-btn'


const GithubCard = ({ repoName }) => {
    const githubData = useStaticQuery(graphql`
    query {
        githubData {
            data {
              user {
                repositories {
                  edges {
                    node {
                      name
                      description
                      primaryLanguage {
                        color
                        name
                      }
                      repositoryTopics {
                        edges {
                          node {
                            topic {
                              name
                            }
                          }
                        }
                      }
                      stargazerCount
                      updatedAt
                    }
                  }
                }
              }
            }
          }
      }
    `);

    function getProjectGithubData() {
        var r;
        githubData.githubData.data.user.repositories.edges.map((item) => {
            if (item.node.name === repoName) {
                r = item.node;
                return;
            }
        })
        return r;
    }

    const projectGithubData = getProjectGithubData();

    return (
        <div className={styles.githubCard}>
            <div className={styles.topSection}>
                <h5><GoRepo className={styles.repoIcon} /><a href={`https://www.github.com/jan2210/${repoName}`} target="_blank" rel="noreferrer">{repoName}</a></h5>
                <GitHubButton href={`https://www.github.com/jan2210/${repoName}`} data-icon="octicon-star" data-size='large' aria-label="Star jan2210/Dijkstra2 on GitHub">Star</GitHubButton>
            </div>
            <p className={styles.description}>{projectGithubData.description}</p>
            <div className={styles.topics}>
                {
                    projectGithubData.repositoryTopics.edges.map((item) => {
                        return (<a href={`https://github.com/topics/${item.node.topic.name}`} target="_blank" rel="noreferrer"><p>{item.node.topic.name}</p></a>);
                    })
                }
            </div>
            <div className={styles.footer}>
                <span className={styles.footerItem}>
                    <div className={styles.circle} style={{ backgroundColor: projectGithubData.primaryLanguage.color }} />
                    <p>{projectGithubData.primaryLanguage.name}</p>
                </span>
                <span className={styles.footerItem}>
                    <AiOutlineStar className={styles.starIcon} />
                    <p>{projectGithubData.stargazerCount}</p>
                </span>
                <p>{projectGithubData.updatedAt}</p>
            </div>
        </div>
    )
}

export default GithubCard
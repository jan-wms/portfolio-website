import * as styles from './githubCard.module.css'
import { GoRepo } from "@react-icons/all-files/go/GoRepo"
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar"
import { BiGitRepoForked } from "@react-icons/all-files/bi/BiGitRepoForked"
import { useStaticQuery, graphql } from "gatsby"
import GitHubButton from 'react-github-btn'
import React from "react"



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
                      forkCount
                      isPrivate
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
        <h3><GoRepo className={styles.repoIcon} /><a href={`https://www.github.com/jan2210/${repoName}`} title={repoName} target="_blank" rel="noreferrer">{repoName.length > 20 ? repoName.substr(0,15) +'...' : repoName}</a><div className={styles.repoVisibility}>{projectGithubData.isPrivate ? 'Private' : 'Public'}</div></h3>
        <GitHubButton href={`https://www.github.com/jan2210/${repoName}`} title={repoName} data-icon="octicon-star" data-size='large' aria-label="Star jan2210/Dijkstra2 on GitHub">Star</GitHubButton>
      </div>
      <p className={styles.description}>{projectGithubData.description}</p>
      <div className={styles.topics}>
        {
          projectGithubData.repositoryTopics.edges.map((item, index) => {
            return (<a key={index} href={`https://github.com/topics/${item.node.topic.name}`} target="_blank" rel="noreferrer" title={item.node.topic.name}><p>{item.node.topic.name}</p></a>);
          })
        }
      </div>
      <div className={styles.footer}>
        <span className={styles.footerItem}>
          <div className={styles.circle} style={{ backgroundColor: projectGithubData.primaryLanguage.color }} />
          <p>{projectGithubData.primaryLanguage.name}</p>
        </span>
        <span className={styles.footerItem}>
          <AiOutlineStar className={styles.starIcon} color='rgb(105, 117, 128)'/>
          <p>{projectGithubData.stargazerCount}</p>
        </span>
        <span className={styles.footerItem}>
          <BiGitRepoForked className={styles.starIcon} color='rgb(105, 117, 128)'/>
          <p>{projectGithubData.forkCount}</p>
        </span>
      </div>
    </div>
  )
}

export default GithubCard
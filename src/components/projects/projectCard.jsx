import React from 'react'
import * as styles from './projectCard.module.css'
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import GithubRepoContainer from '../githubCard/githubCard'


const ProjectCard = ({ projectInformation, image }) => {
  const imageData = useStaticQuery(graphql`
  query {
    file(
      relativePath: {eq: "assets/dijkstra.png"}
      sourceInstanceName: {eq: "static"}
    ) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED)
      }
    }
  }
`);


  function getDate(p) {
    const date = new Date(p);
    const months = ["Jan.", "Feb.", "März", "Apr.", "Mai", "Jun.", "Jul.", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."];
    return months[date.getMonth()] + " " + date.getFullYear().toString();
  }
  // ${projectInformation.image.substr(1)}

  return (
    <div className={styles.projectCard}>
      <section className={styles.leftSection}>
        <p className={styles.date}>{getDate(projectInformation.date)}</p>
        <h4>{projectInformation.title}</h4>
        <p className={styles.description}>{projectInformation.description}</p>
        <GithubRepoContainer repoUrl={projectInformation.githubUrl}/>
      </section>
      <div className={styles.imageSection}>
       {/**
        * <GatsbyImage image={imageData.file.childImageSharp.gatsbyImageData} alt={projectInformation.title} />
        */} 
      </div>
    </div>
  )
}

export default ProjectCard
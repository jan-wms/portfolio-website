import React from 'react'
import * as styles from './projectCard.module.css'
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"


const ProjectCard = ({ projectInformation }) => {
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

  // ${projectInformation.image.substr(1)}

  return (
    <div className={styles.projectCard}>
      <section className={styles.leftSection}>
        <p>{projectInformation.date}</p>
        <h4>{projectInformation.title}</h4>
        <p>{projectInformation.description}</p>
        <p>Github: {projectInformation.githubUrl}</p>
      </section>
      <div className={styles.imageSection}>
        <GatsbyImage image={imageData.file.childImageSharp.gatsbyImageData} alt={projectInformation.title} />
      </div>
    </div>
  )
}

export default ProjectCard
import React from 'react'
import * as styles from './projectCard.module.css'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import GithubCard from '../githubCard/githubCard'
import { IoMdDownload } from "@react-icons/all-files/io/IoMdDownload"
import { BiLink } from "@react-icons/all-files/bi/BiLink"

const ProjectCard = ({ projectInformation, imageD }) => {
  const imageData = useStaticQuery(graphql`
  query {
    image: file(
      relativePath: {eq: "assets/dijkstra.png"}
      sourceInstanceName: {eq: "static"}
    ) {
      childImageSharp {
        gatsbyImageData(height: 300, placeholder: BLURRED)
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
        {projectInformation.informationUrl != "" && projectInformation.informationUrlText != "" ? <div className={styles.linkInformation}>
          <BiLink className={styles.icon} />
          <a href={projectInformation.informationUrl} target="_blank"><p>{projectInformation.informationUrlText}</p></a>
        </div> : null}
        {projectInformation.downloadUrl != "" && projectInformation.downloadUrlText != "" ? <div className={styles.linkDownload}>
          <IoMdDownload className={styles.icon} />
          <a href={projectInformation.downloadUrl} target="_blank"><p>{projectInformation.downloadUrlText}</p></a>
        </div> : null}
        <div className={styles.storeDownload}>
          {projectInformation.appstoreUrl != "" ? <a href={projectInformation.appstoreUrl} target="_blank"><StaticImage src='../../../static/assets/appstore.png' alt="Download on the App Store" height={40} /></a> : null}
          {projectInformation.playstoreUrl != "" ? <a href={projectInformation.playstoreUrl} target="_blank"><StaticImage src='../../../static/assets/playstore.png' alt="Get it on Google Play" height={40} /></a> : null}
        </div>
        <GithubCard repoUrl={projectInformation.githubUrl} />
      </section>
      <div className={styles.imageSection}>
        <GatsbyImage image={imageData.image.childImageSharp.gatsbyImageData} alt={projectInformation.title} imgStyle={{ height: 'auto' }} />
      </div>
    </div>
  )
}

export default ProjectCard
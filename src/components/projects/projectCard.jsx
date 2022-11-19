import React from 'react'
import * as styles from './projectCard.module.css'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import GithubCard from '../githubCard/githubCard'
import { IoMdDownload } from "@react-icons/all-files/io/IoMdDownload"
import { BiLink } from "@react-icons/all-files/bi/BiLink"

const ProjectCard = ({ projectInformation }) => {

  const allImageData = useStaticQuery(graphql`
query ImageQuery {
  allFile(filter: {sourceInstanceName: {eq: "static"}}) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(height: 500, placeholder: BLURRED)
        }
      }
    }
  }
}
`);

  function getNodeIndex() {
    var r = 0
    allImageData.allFile.edges.map((item, index) => {
      if (item.node.relativePath === projectInformation.image.substr(1)) {
        r = index;
      }
    });
    return r;
  }

  function getDate(p) {
    const date = new Date(p);
    const months = ["Jan.", "Feb.", "März", "April", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."];
    return months[date.getMonth()] + " " + date.getFullYear().toString();
  }

  return (
    <div className={styles.projectCard}>
      <section className={styles.leftSection}>
        <section>
          <p className={styles.date}>{getDate(projectInformation.date)}</p>
          <h4>{projectInformation.title}</h4>
          <p className={styles.description}>{projectInformation.description}</p>
        </section>

        {projectInformation.informationUrl !== "" && projectInformation.informationUrlText !== "" ? <div className={styles.linkInformation}>
          <BiLink className={styles.icon} />
          <a href={projectInformation.informationUrl} target="_blank" rel="noreferrer"><p>{projectInformation.informationUrlText}</p></a>
        </div> : null}
        {projectInformation.downloadUrl !== "" && projectInformation.downloadUrlText !== "" ? <div className={styles.linkDownload}>
          <IoMdDownload className={styles.icon} />
          <a href={projectInformation.downloadUrl} target="_blank" rel="noreferrer"><p>{projectInformation.downloadUrlText}</p></a>
        </div> : null}
        {projectInformation.appstoreUrl !== "" || projectInformation.playstoreUrl !== "" ?
          <div className={styles.storeDownload}>
            {projectInformation.appstoreUrl !== "" ? <a href={projectInformation.appstoreUrl} target="_blank" rel="noreferrer"><StaticImage src='../../../static/assets/appstore.png' alt="Download on the App Store" height={40} /></a> : null}
            {projectInformation.playstoreUrl !== "" ? <a href={projectInformation.playstoreUrl} target="_blank" rel="noreferrer"><StaticImage src='../../../static/assets/playstore.png' alt="Get it on Google Play" height={40} /></a> : null}
          </div> : null}
        <GithubCard repoName={projectInformation.repoName} />
      </section>

      <div className={styles.imageSection}>
        <GatsbyImage image={allImageData.allFile.edges[getNodeIndex()].node.childImageSharp.gatsbyImageData} alt={projectInformation.title} imgStyle={{ height: '500px', borderRadius: '0 20px 20px 0' }} style={{ height: '500px', maxWidth: '350px' }} />
      </div>
    </div>
  )
}

export default ProjectCard
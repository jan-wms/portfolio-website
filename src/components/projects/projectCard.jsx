import React from 'react'
import { useEffect, useState } from 'react'
import * as styles from './projectCard.module.css'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import GithubCard from '../githubCard/githubCard'
import { BiLink } from "@react-icons/all-files/bi/BiLink"
import { motion } from "framer-motion";


const ProjectCard = ({ projectInformation }) => {

  const allImageData = useStaticQuery(graphql`
query ImageQuery {
  allFile(filter: {sourceInstanceName: {eq: "static"}}) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
          original {
            height
            width
          }
        }
      }
    }
  }
}
`);

const [windowWidth, detectWW] = useState(typeof window !== "undefined"? window.innerWidth : 500);

  useEffect(() => {
    const detectSize = () => {
      detectWW(typeof window !== "undefined"? window.innerWidth : 500);
    }

    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, []);

  function getNodeIndex() {
    var r = 0
    allImageData.allFile.edges.map((item, index) => {
      if (item.node.relativePath === projectInformation.imageSection.image.substr(1)) {
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
    <motion.div className={styles.projectCard}

    initial={{ scale: 0.5}}
    whileInView={{ scale: 1  }}
    viewport={{ once: false, margin: "3000px 0px 0px 0px" }}
    transition={{
      type: "spring",
      duration: 0.8,
      bounce: 0.1,
    }}>
      <section className={styles.leftSection}>
        <section>
          <p className={styles.date}>{getDate(projectInformation.date)}</p>
          <h4>{projectInformation.title}</h4>
          <p className={styles.description}>{projectInformation.description}</p>
        </section>
        {projectInformation.linkSection.url !== null && projectInformation.linkSection.urlText !== null ? <div className={styles.linkInformation}>
          <BiLink className={styles.icon} />
          <a href={projectInformation.linkSection.url} target="_blank" rel="noreferrer"><p>{projectInformation.linkSection.urlText}</p></a>
        </div> : null}
        {projectInformation.linkSection.appstoreUrl !== null || projectInformation.linkSection.playstoreUrl !== null ?
          <div className={styles.storeDownload}>
            {projectInformation.linkSection.appstoreUrl !== null ? <a href={projectInformation.linkSection.appstoreUrl} target="_blank" rel="noreferrer"><StaticImage src='../../../static/assets/appstore.png' alt="Download on the App Store" height={40} /></a> : null}
            {projectInformation.linkSection.playstoreUrl !== null ? <a href={projectInformation.linkSection.playstoreUrl} target="_blank" rel="noreferrer"><StaticImage src='../../../static/assets/playstore.png' alt="Get it on Google Play" height={40} /></a> : null}
          </div> : null}
        <GithubCard repoName={projectInformation.linkSection.repoName}/>
      </section>

      <div className={styles.imageSection} style={{backgroundColor: projectInformation.imageSection.color}}>
        <GatsbyImage image={allImageData.allFile.edges[getNodeIndex()].node.childImageSharp.gatsbyImageData} alt={projectInformation.title} style={{height: projectInformation.imageSection.isFullscreen ? '100%' : 'auto', maxHeight: projectInformation.imageSection.isFullscreen ? '100%' : (windowWidth < 900 ? '300px' : '450px'), maxWidth: projectInformation.imageSection.isFullscreen ? '100%' : (windowWidth < 900 ? '90%' : '300px'), aspectRatio: `${allImageData.allFile.edges[getNodeIndex()].node.childImageSharp.original.width}/${allImageData.allFile.edges[getNodeIndex()].node.childImageSharp.original.height}`}} />
      </div>
    </motion.div>
  )
}

export default ProjectCard
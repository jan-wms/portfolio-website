import React from 'react'
import * as styles from './projectCard.module.css'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
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


  function getNodeIndex() {
    var r = 0
    allImageData.allFile.edges.map((item, index) => {
      if (item.node.relativePath === projectInformation.image.substr(1)) {
        r = index;
      }
      return null;
    });
    return r;
  }

  function getDate(p) {
    const date = new Date(p);
    const months = ["Jan.", "Feb.", "März", "April", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."];
    return months[date.getMonth()] + " " + date.getFullYear().toString();
  }

  return (
    <a href={projectInformation.url} target="_blank" rel="noreferrer nofollow" title={projectInformation.title}>
    <motion.div className={styles.projectCard}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false, margin: "3000px 0px 0px 0px" }}
      transition={{
        type: "spring",
        duration: 0.8,
        bounce: 0.1,
      }}>
      <div className={styles.imageSection}>
        <GatsbyImage image={allImageData.allFile.edges[getNodeIndex()].node.childImageSharp.gatsbyImageData} alt={projectInformation.title} title={projectInformation.title} style={{ height: '100%', maxHeight: '100%', maxWidth: '100%', aspectRatio: `${allImageData.allFile.edges[getNodeIndex()].node.childImageSharp.original.width}/${allImageData.allFile.edges[getNodeIndex()].node.childImageSharp.original.height}` }} imgStyle={{ borderRadius: '20px 20px 0 0' }} />
      </div>
      <section className={styles.content}>
        <section>
          <p className={styles.date}>{getDate(projectInformation.date)}</p>
          <h3>{projectInformation.title}</h3>
          <p className={styles.description}>{projectInformation.description}</p>
        </section>
      </section>
    </motion.div></a>
  )
}

export default ProjectCard
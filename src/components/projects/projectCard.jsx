import React from 'react'
import * as styles from './projectCard.module.css'
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

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

  return (
    <a
      className={styles.projectCard}
      href={projectInformation.url}
      target="_blank"
      rel="noreferrer noopener"
      title={projectInformation.title}
    >
      <div className={styles.imageSection}>
        <GatsbyImage image={allImageData.allFile.edges[getNodeIndex()].node.childImageSharp.gatsbyImageData} alt={projectInformation.title} title={projectInformation.title} style={{ height: '100%', maxHeight: '100%', maxWidth: '100%', aspectRatio: `${allImageData.allFile.edges[getNodeIndex()].node.childImageSharp.original.width}/${allImageData.allFile.edges[getNodeIndex()].node.childImageSharp.original.height}` }} imgStyle={{ borderRadius: '20px 20px 0 0' }} />
      </div>
      <section className={styles.content}>
        <section>
          <h3>{projectInformation.title}</h3>
          <p className={styles.description}>{projectInformation.description}</p>
        </section>
      </section>
    </a>
  )
}

export default ProjectCard
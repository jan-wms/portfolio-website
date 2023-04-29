import React from 'react'
import * as styles from './projects.module.css'
import ProjectCard from './projectCard';
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const projectData = useStaticQuery(graphql`
  query ProjectQuery {
    allProjectsJson(sort: {date: DESC}) {
      edges {
        node {
          date
          title
          description
          image
          linkSection {
            url
            appstoreUrl
            playstoreUrl
          }
        }
      }
    }
  }
  `);

  return (
    <section className={styles.projectSection} id='projects'>
      <h2 className={styles.title}>Projekte</h2>
        <section className={styles.projectCards}>
          {
            projectData.allProjectsJson.edges.map((item, index) => {
              return (
                <ProjectCard projectInformation={item.node} key={index} />
              )
            })
          }
        </section>
    </section>
  )
}

export default Projects
import React from 'react'
import * as styles from './projects.module.css'
import { useState, useEffect } from 'react'
import ProjectCard from './projectCard';
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const [windowHeight, detectWH] = useState(typeof window !== "undefined" ? window.innerHeight : 500);

  useEffect(() => {
    const detectSize = () => {
      detectWH(typeof window !== "undefined" ? window.innerHeight : 500);
    }

    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [])

  const projectData = useStaticQuery(graphql`
  query ProjectQuery {
    allProjectsJson {
      edges {
        node {
          date
          repoName
          description
          url
          urlText
          appstoreUrl
          playstoreUrl
          image
          title
        }
      }
    }
    }
  `);

  return (
    <section className={styles.projectSection} style={{ marginTop: windowHeight }}>
      <h2>Projekte</h2>
      <div>
        <div className={styles.timeLine}>

        </div>
        <section className={styles.projectCards}>
          {
            projectData.allProjectsJson.edges.map((item, index) => {
              return (
                <ProjectCard projectInformation={item.node} key={index} />
              )
            })
          }
        </section>
      </div>
    </section>
  )
}

export default Projects
import React from 'react'
import * as styles from './projectCard.module.css'

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <h4>
        Hausaufgaben Organizer
      </h4>
      <p>
        App zum Verwalten und einfachen Erstellen von Hausaufgaben.
      </p>
    </div>
  )
}

export default ProjectCard
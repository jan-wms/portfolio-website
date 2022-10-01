import React from 'react'
import * as styles from './projects.module.css'
import { useState, useEffect } from 'react'

const Projects = () => {
  const [windowHeight, detectWH] = useState(window.innerHeight);

  useEffect(() => {
    const detectSize = () => {
      detectWH(window.innerHeight);
    }

    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [])

  return (
    <section className={styles.projectSection} style={{marginTop: windowHeight}}>
        <h2>Projekte</h2>
    </section>
  )
}

export default Projects
import React from 'react'
import * as styles from './projects.module.css'
import { useState, useEffect } from 'react'
import ProjectCard from './projectCard';

const Projects = () => {

  const [windowWidth, detectWW] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const detectSize = () => {
      detectWW(window.innerWidth);
      detectWH(window.innerHeight);
    }

    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
    <section className={styles.projectSection} style={{ marginTop: windowHeight }}>
      <h2>Projekte</h2>
      <section className={styles.projectCards}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </section>
  )
}

export default Projects
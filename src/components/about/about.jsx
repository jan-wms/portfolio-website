import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useRef, useState } from 'react'
import * as styles from './about.module.css'
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const About = () => {
  //window height
  const [windowHeight, detectWH] = useState(typeof window !== "undefined" ? window.innerHeight : 1000);
  const [windowWidth, detectWW] = useState(typeof window !== "undefined" ? window.innerWidth : 1000);
  useEffect(() => {
    const detectSize = () => {
      detectWH(typeof window !== "undefined" ? window.innerHeight : 0);
      detectWW(typeof window !== "undefined" ? window.innerWidth : 0);
    }
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [])


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1 0'] });
  const opacityH3 = useTransform(scrollYProgress, [0, 0.33, 0.45, 0.55, 0.66, 1], [0, 0, 1, 1, 0, 0]);
  const opacityBlurred = useTransform(scrollYProgress, [0, 0.33, 0.45, 0.55, 0.66, 1], [0, 0, 0.3, 0.3, 0, 0]);

  return (
    <section className={styles.about} id='about' ref={ref}>
      <StaticImage src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain' class={styles.image} />
      <div className={styles.content}>
        <StaticImage src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain' class={styles.image} />
        <motion.h3 style={{ opacity: opacityH3 }}>Ich bin Jan, 19 Jahre alt.<br />
          Begeisterter Programmierer und Bergsteiger.</motion.h3>
        <motion.div className={styles.blurred} style={{ opacity: opacityBlurred }} />
      </div>
      <StaticImage src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain' class={styles.image} />
    </section>
  )
}

export default About
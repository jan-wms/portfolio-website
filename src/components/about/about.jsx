import { StaticImage } from 'gatsby-plugin-image'
import React, { useRef } from 'react'
import * as styles from './about.module.css'
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1 0'] });
  const x = useTransform(scrollYProgress, [0, 1], [-300, -1000]);
  const o = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className={styles.about} id='about' ref={ref}>
      <motion.div className={styles.slide} style={{ translateX: x }}>
        <StaticImage src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain' class={styles.image} />
        <div className={styles.content}>
          <StaticImage src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain' class={styles.image} />
          <h2>Ich bin Jan, 19 Jahre alt, und begeisterter Programmierer und Bergsteiger.</h2>
        </div>
        <StaticImage src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain' class={styles.image} />
      </motion.div>
    </section>
  )
}

export default About
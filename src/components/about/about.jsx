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
  const x = 0;//useTransform(scrollYProgress, [0, 1], [-300, -1200]);
  const o1 = useTransform(scrollYProgress, [0, 0.33, 0.45,0.55, 0.66, 1], [0, 0, 1, 1,0, 0]);
  const o2 = useTransform(scrollYProgress, [0, 0.33, 0.45,0.55, 0.66, 1], [0, 0, 0.3,0.3, 0, 0]);

  return (
    <section className={styles.about} id='about' ref={ref}>
      <motion.div className={styles.slide} style={{ translateX: x }}>
        <StaticImage src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain' class={styles.image} />
        <div className={styles.content}>
          <StaticImage src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain' class={styles.image} />
          <motion.div className={styles.blurred} style={{ opacity: o2 }} />
          <motion.h3 style={{ opacity: o1 }}>Ich bin Jan, 19 Jahre alt.<br />
            Begeisterter Programmierer und Bergsteiger.</motion.h3>
        </div>
        <StaticImage src='../../../static/assets/watzmann-hochkalter.jpeg' alt='Mountain' title='Mountain' class={styles.image} />
      </motion.div>
    </section>
  )
}

export default About
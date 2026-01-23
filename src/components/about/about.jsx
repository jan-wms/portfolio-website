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
  const [windowWidth, detectWW] = useState(typeof window !== "undefined" ? window.innerWidth : 1000);
  useEffect(() => {
    const detectSize = () => {
      detectWW(typeof window !== "undefined" ? window.innerWidth : 0);
    }
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [])


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1 0'] });
  const opacityH3 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0]);

  const image1 = '../../../static/assets/mountain1.jpeg';
  const image2 = '../../../static/assets/mountain2.jpeg';

  return (
    <section className={styles.about} id='about' ref={ref}>
      {
        windowWidth < 700 ?


          <StaticImage
            src={image2} alt='Mountain' title='Mountain'
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
          :
          <StaticImage
            src={image1} alt='Mountain' title='Mountain'
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
      }
      <div className={styles.overlay} >
        <div className={styles.top} />
        <div className={styles.bottom} />
        <div className={styles.left} />
        <div className={styles.right} />
      </div>
      <motion.h3 style={{ opacity: opacityH3 }}>Ich bin Jan, 22 Jahre alt.<br />
        Begeisterter Programmierer und Bergsteiger.</motion.h3>
    </section>
  )
}

export default About
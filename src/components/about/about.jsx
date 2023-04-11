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
  const opacityH3 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0]);

  const style = {
    width: '100%',
    height: '100%',
    position: 'absolute'
  };

  return (
    <section className={styles.about} id='about' ref={ref}>
      <div className={styles.before}>
        <StaticImage
          src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain'
          style={style}
          objectPosition={'0% 100%'}
        />
      </div>
      <div className={styles.content}>
        <StaticImage
          src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain'
          style={style}
        />
        <div className={styles.titleWrapper}>
          <motion.h3 style={{ opacity: opacityH3 }}>Ich bin Jan, 19 Jahre alt.<br />
            Begeisterter Programmierer und Bergsteiger.</motion.h3>
        </div>
      </div>
      <div className={styles.after}>
        <StaticImage
          src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain'
          style={style}
          objectPosition={'100% 50%'}
        />
      </div>
      {/*<StaticImage
        src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain'
        style={{
          transform: 'scaleX(-1)',
        }}
        width={200}
        height={100}
        objectFit='contain'
      />*/}
      {/*
     
     <div className={styles.content}>
        <StaticImage src='../../../static/assets/mountain.jpeg' alt='Mountain' title='Mountain' class={styles.image} />
        
      </div>
    
  */}
    </section>
  )
}

export default About
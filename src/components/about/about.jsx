import { StaticImage } from 'gatsby-plugin-image'
import React, { useState, useEffect, useRef } from 'react'
import * as styles from './about.module.css'

const About = () => {

  const image = '../../../static/assets/mountain.jpeg';

  const phrases = [
    "mountaineering.",
    "coding.",
    "running.",
    "developing.",
    "cycling."
  ]

  const extended = [...phrases, phrases[0]]
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(false);
  const timeoutRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % extended.length)
    }, 5000)

    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    if (index == phrases.length) {
      timeoutRef.current = setTimeout(() => {
        setEnableTransition(false)
        setIndex(0)
      }, 600)
    } else {
      setEnableTransition(true)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [index, phrases.length])

  return (
    <section className={styles.about} id='about'>
      <div className={styles.left}>
        <h3>I'm a Computer Science student at the Technical University of Munich.</h3>
        <div className={styles.wrapper}>
        <h3>I like</h3>
        <div className={styles.dynamicWrapper}>
          <div className={styles.dynamicInner} style={{
            transform: `translateY(-${index * 2}rem)`,
            transition: enableTransition ? "transform 0.6s ease-in-out" : "none"
          }}>
            {
              extended.map((text, i) => (
                <h3 key={i}>{text}</h3>
              ))
            }
          </div>
        </div>
        </div>
      </div>
      <div className={styles.right}>
        <StaticImage style={{ aspectRatio: 1 }} src={image} className={styles.image} alt='Mountain' title='Mountain' />
      </div>
    </section>
  )
}

export default About
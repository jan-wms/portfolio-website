import { StaticImage } from 'gatsby-plugin-image'
import React, { useState, useEffect, useRef } from 'react'
import * as styles from './about.module.css'

const About = () => {

  const image = '../../../static/assets/mountain.jpg';

  const phrases = [
    "mountains.",
    "coding.",
    "running.",
    "developing.",
    "cycling.",
    "skiing."
  ]

  const extended = [...phrases, phrases[0]]
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const timeoutRef = useRef(null)

  const MOVE = 600;
  const PAUSE = 3000;

  useEffect(() => {
    function scheduleNext() {
      timeoutRef.current = setTimeout(() => {
        setIndex(prev => {
          const next = prev + 1

          if (next === phrases.length) {
            setEnableTransition(true)

            setTimeout(() => {
              setEnableTransition(false)
              setIndex(0)
            }, MOVE)

            setTimeout(scheduleNext, MOVE + PAUSE)

            return next
          }

          setEnableTransition(true)
          setTimeout(scheduleNext, MOVE + PAUSE)
          return next
        })
      }, PAUSE)
    }

    scheduleNext()

    return () => clearTimeout(timeoutRef.current)
  }, [phrases.length])


  return (
    <section className={styles.about} id='about'>
      <div className={styles.left}>
        <h3>I'm a Computer Science student at the Technical University of Munich.</h3>
        <div className={styles.wrapper}>
          <h3>I like</h3>
          <div className={styles.dynamicWrapper}>
            <div className={styles.dynamicInner} style={{
              transform: `translateY(-${index * 2}rem)`,
              transition: enableTransition ? `transform ${MOVE}ms ease-in-out` : "none"
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
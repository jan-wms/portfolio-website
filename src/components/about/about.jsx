import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from './about.module.css'

const About = () => {
  return (
    <section className={styles.about} id='about'>
      <h2>Über mich</h2>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <StaticImage src='../../../static/assets/mountain.jpeg' />
      </div>
    </section>
  )
}

export default About
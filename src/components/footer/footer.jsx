import { Link } from 'gatsby'
import React from 'react'
import * as styles from './footer.module.css'
import { VscGithub } from "@react-icons/all-files/vsc/VscGithub"


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.contactSection}>
        <h2>Kontakt</h2>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/success">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" id="name" placeholder='Name' />
          <input type="email" name="email" id="email" placeholder='E-Mail' />
          <input type="text" name="subject" id="subject" placeholder='Betreff' />
          <textarea name="message" id="message" rows="5" placeholder='Nachricht' />
          <button type="submit">Abschicken</button>
        </form>
      </section>
      <div className={styles.divider} />
      <section className={styles.linkSection}>
        <h2>Links</h2>
        <a href='https://www.github.com/jan2210/' target="_blank" rel="noreferrer"><p><VscGithub className={styles.icon}/>jan2210</p></a>
        <p>#test</p>
        <p>#test</p>
      </section>
      <span><p>©2022 Jan Wermeckes</p><p style={{ display: 'none' }}><Link to="/">Impressum</Link></p></span>
    </footer>
  )
}

export default Footer
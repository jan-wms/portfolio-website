import { Link } from 'gatsby'
import React from 'react'
import * as styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.contactSection}>
        <h2>Kontakt</h2>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/pages/success">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Betreff
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Nachricht
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Abschicken</button>
        </form>
      </section>
      <div className={styles.divider}/>
      <section className={styles.linkSection}>
      <h2>Links</h2>
      <p>#test</p>
      <p>#test</p>
      <p>#test</p>
      </section>
      <span><p>©2022 Jan Wermeckes</p><p style={{display: 'none'}}><Link to="/">Impressum</Link></p></span>
    </footer>
  )
}

export default Footer
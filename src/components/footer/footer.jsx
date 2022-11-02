import React from 'react'
import * as styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <h2>Kontakt</h2>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
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
      <p>© 2022 Jan Wermeckes</p>
    </footer>
  )
}

export default Footer
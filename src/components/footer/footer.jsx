import React from 'react'
import * as styles from './footer.module.css'
import { VscGithub } from "@react-icons/all-files/vsc/VscGithub"
import { BiLink } from "@react-icons/all-files/bi/BiLink"
import { FaGooglePlay } from "@react-icons/all-files/fa/FaGooglePlay"
import { SiAppstore } from "@react-icons/all-files/si/SiAppstore"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.contactSection}>
        <h2>Kontakt</h2>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/success">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" id="name" placeholder='Name' required/>
          <input type="email" name="email" id="email" placeholder='E-Mail' required/>
          <input type="text" name="subject" id="subject" placeholder='Betreff' required/>
          <textarea name="message" id="message" rows="5" placeholder='Nachricht' required/>
          <button type="submit">Abschicken</button>
        </form>
      </section>
      <div className={styles.divider} />
      <section className={styles.linkSection}>
        <a className={styles.link} href='https://www.github.com/jan2210/' target="_blank" rel="noreferrer"><VscGithub className={styles.icon}/><p>Github</p></a>
        <a className={styles.link} href='http://janw.bplaced.net/' target="_blank" rel="noreferrer"><BiLink className={styles.icon}/><p>janw.bplaced.net</p></a>
        <a className={styles.link} href='https://play.google.com/store/apps/developer?id=Jan+W.' target="_blank" rel="noreferrer"><FaGooglePlay className={styles.icon}/><p>Google Play</p></a>
        <a className={styles.link} href='https://janw.netlify.app' target="_blank" rel="noreferrer"><SiAppstore className={styles.icon}/><p>App Store</p></a>
      </section>
      <span><p>©2022 Jan Wermeckes</p></span>
    </footer>
  )
}

export default Footer
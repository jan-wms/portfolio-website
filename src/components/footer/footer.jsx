import React from 'react'
import * as styles from './footer.module.css'
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import { GoMail } from "react-icons/go";


const Footer = () => {
  return (
    <footer className={styles.footer} id='footer'>
      <section className={styles.social}>
        <a className={styles.link} href='https://www.github.com/jan-wms/' target="_blank" rel="noreferrer noopener" title='Github'><VscGithubAlt className={styles.icon} /><p>@jan-wms</p></a>
        <a className={styles.link} href='https://www.linkedin.com/in/jan-wermeckes' target="_blank" rel="noreferrer noopener" title='LinkedIn'><PiLinkedinLogo className={styles.icon} /><p>Jan Wermeckes</p></a>
        <a className={styles.link} href='mailto:jan@wermeckes.com' title='Mail'><GoMail className={styles.icon} /><p>jan@wermeckes.com</p></a>
      </section>
      <section className={styles.copyright}>
        <p>©{new Date().getFullYear()} Jan Wermeckes</p>
      </section>
    </footer>
  )
}

export default Footer

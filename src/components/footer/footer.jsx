import React from 'react'
import * as styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <h2>Kontakt</h2>
        <p>Kontaktformular</p>
      </section>
      <p>© 2022 Jan Wermeckes</p>
    </footer>
  )
}

export default Footer
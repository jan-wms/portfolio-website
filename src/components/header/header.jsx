import React from 'react'
import * as styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
          <h1>Jan Wermeckes</h1>
          <h2>software developer</h2>
      </div>
    </header>
  )
}

export default Header
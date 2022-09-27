import React from 'react'
import * as styles from './navbar.module.css'
import { FiMenu } from "@react-icons/all-files/fi/FiMenu"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <FiMenu className={styles.icon}/>
    </nav>
  )
}

export default Navbar
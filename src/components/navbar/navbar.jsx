import React from 'react'
import * as styles from './navbar.module.css'
import { FiMenu } from "@react-icons/all-files/fi/FiMenu"
import { IoClose } from "@react-icons/all-files/io5/IoClose"
import { useState } from 'react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.navbarIsOpen : ''}`}>
      <FiMenu className={`${styles.icon} ${isOpen ? styles.hide : ''}`} onClick={() => {setIsOpen(true);}}/>
      <IoClose className={`${styles.icon} ${!isOpen ? styles.hide : ''}`} onClick={() => {setIsOpen(false);}}/>
      <ul className={`${styles.list} ${!isOpen ? styles.hide : ''}`}>
        <a href='#'><li>Überblick</li></a>
        <a href='#'><li>Projekte</li></a>
        <a href='#'><li>Projekte</li></a>
        <a href='#'><li>Projekte</li></a>
        <a href='#'><li>Kontakt</li></a>
      </ul>
    </nav>
  )
}

export default Navbar
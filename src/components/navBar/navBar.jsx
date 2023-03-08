import React, { useState } from 'react'
import * as styles from './navBar.module.css'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { HiMenu } from "@react-icons/all-files/hi/HiMenu"
import { HiX } from "@react-icons/all-files/hi/HiX"


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.wrapper}>
            {
                isMenuOpen ? (<HiX className={styles.icon} onClick={toggleIsMenuOpen} />) : (<HiMenu className={styles.icon} onClick={toggleIsMenuOpen} />)
            }

            <ul className={`${styles.navBarList} ${isMenuOpen ? styles.navBarListActive : ''}`}>
                <li className={styles.normalLi}><AnchorLink to="#about" title="Über mich"><span>Über mich</span></AnchorLink></li>
                <li className={styles.normalLi}><AnchorLink to="#projects" title="Projekte"><span>Projekte</span></AnchorLink></li>
                <li className={styles.normalLi}><AnchorLink to="#github" title="Github"><span>Github</span></AnchorLink></li>
                <li className={styles.buttonLi}><AnchorLink to="#footer" title="Kontakt"><span>Kontakt</span></AnchorLink></li>
            </ul>

        </nav>
    )
}

export default NavBar
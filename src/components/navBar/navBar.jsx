import React from 'react'
import * as styles from './navBar.module.css'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <ul>
                <li className={styles.normalLi}><AnchorLink to="#about" title="Über mich"><span>Über mich</span></AnchorLink></li>
                <li className={styles.normalLi}><AnchorLink to="#projects" title="Projekte"><span>Projekte</span></AnchorLink></li>
                <li className={styles.normalLi}><AnchorLink to="#github" title="Github"><span>Github</span></AnchorLink></li>
                <li className={styles.buttonLi}><AnchorLink to="#footer" title="Kontakt"><span>Kontakt</span></AnchorLink></li>
            </ul>
        </nav>
    )
}

export default NavBar
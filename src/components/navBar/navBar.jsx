import React, { useState } from 'react'
import * as styles from './navBar.module.css'
import { HiMenu } from "@react-icons/all-files/hi/HiMenu"
import { HiX } from "@react-icons/all-files/hi/HiX"
import { VscGithub } from "@react-icons/all-files/vsc/VscGithub"
import { FaLinkedin } from "react-icons/fa";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = () => {
        setIsMenuOpen(true);
        document.body.style.overflow = "hidden"
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto"
    };

    return (
        <nav className={styles.wrapper}>
            {
                isMenuOpen ? (<HiX className={styles.icon} onClick={closeMenu} />) : (<HiMenu className={styles.icon} onClick={openMenu} />)
            }

            <ul className={`${styles.navBarList} ${isMenuOpen ? styles.navBarListActive : ''}`}>
                <li key='Link to About' className={styles.text}><AnchorLink onAnchorLinkClick={closeMenu} to='/#about' title='About'><span>About</span></AnchorLink></li>
                <li key='Link to Projects' className={styles.text}><AnchorLink onAnchorLinkClick={closeMenu} to='/#projects' title='Projects'><span>Projects</span></AnchorLink></li>
                <li key='Link to Github' className={styles.social}><a  onClick={closeMenu} href='https://www.github.com/jan-wms/' target="_blank" rel="noreferrer noopener" title='Github'><VscGithub /></a></li>
                <li key='Link to LinkedIn' className={styles.social}><a onClick={closeMenu} href='https://www.linkedin.com/in/jan-wermeckes' target="_blank" rel="noreferrer noopener" title='LinkedIn'><FaLinkedin /></a></li>
            </ul>
        </nav>
    )
}

export default NavBar
import React, { useState } from 'react'
import * as styles from './navBar.module.css'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { HiMenu } from "@react-icons/all-files/hi/HiMenu"
import { HiX } from "@react-icons/all-files/hi/HiX"



const NavBar = ({ navBarLinks }) => {
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
            {navBarLinks.map((item) => {
                    return (
                        <li key={item.title} className={item.isButtonStyle ? styles.buttonLi : styles.normalLi} onClick={closeMenu} onKeyDown={closeMenu}><AnchorLink to={item.url} title={item.title}><span>{item.title}</span></AnchorLink></li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default NavBar
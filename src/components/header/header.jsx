import React from 'react'
import HeaderGraphic from './headerGraphic'
import * as styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <span className={styles.title}>
                <h1>
                    Jan Wermeckes
                </h1>
            </span>
            <HeaderGraphic />
        </header>
    )
}

export default Header
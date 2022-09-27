import React from 'react'
import { useState } from 'react'
import HeaderGraphic from './headerGraphic'
import * as styles from './header.module.css'
import { TypeAnimation } from 'react-type-animation'


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <span className={styles.text}>
                    <h1>Jan Wermeckes</h1>
                    <H2Component />
                </span>
            </div>

            <HeaderGraphic className={styles.graphic} />
        </header>
    )
}

export default Header

const H2Component = () => {
    return (
      <TypeAnimation
        sequence={[
          'Herzlich Willkommen',
          2000,
          '',
        ]}
        wrapper="h2"
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
    );
  };
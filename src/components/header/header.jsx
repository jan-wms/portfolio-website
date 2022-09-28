import React from 'react'
import HeaderGraphic from './headerGraphic'
import * as styles from './header.module.css'
import { TypeAnimation } from 'react-type-animation'
import { useRef, useEffect, useState } from 'react'



const Header = () => {

  useEffect(() => {
    console.log(window.scrollY);
    return;
  }, [window.scrollY]);


  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <span className={styles.text}>
          <h1>Jan Wermeckes</h1>
          <H2Component />
        </span>
      </div>

      <div className={styles.rightSection} style={{left: '0'}}>
        <HeaderGraphic className={styles.graphic} />
        <span style={{ display: 'none' }}>
          <h3>lol1</h3>
          <h3>lol2</h3>
          <h3>lol3</h3>
        </span>
      </div>
    </header>
  )
}

export default Header

const H2Component = () => {
  return (
    <TypeAnimation
      sequence={[
        'Herzlich Willkommen!',
        2000,
        'Welcome!',
        2000,
      ]}
      wrapper="h2"
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />
  );
};
import React from 'react'
import HeaderGraphic from './headerGraphic'
import * as styles from './header.module.css'
import { TypeAnimation } from 'react-type-animation'
import { useRef, useEffect, useState } from 'react'



const Header = () => {

  const [windowWidth, detectWW] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const detectSize = () => {
      detectWW(window.innerWidth);
    }

    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [])

  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header} style={{marginBottom: `${windowWidth / 2}px`, position: 'sticky'}}>
      <div className={styles.title} style={{ left: `${Math.min(Math.max(-(100 * scrollPosition) / windowWidth, -50), 0 )}vw` }}>
        <span className={styles.text}>
          <h1>Jan Wermeckes</h1>
          <H2Component />
        </span>
      </div>

      <div className={styles.rightSection} style={{ left: `${Math.min(Math.max(50 - (100 * scrollPosition) / windowWidth, 0), 50)}vw` }}>
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
      //repeat={Infinity}
      repeat={0}
      style={{ fontSize: '2em' }}
    />
  );
};
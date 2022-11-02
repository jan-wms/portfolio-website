import React from 'react'
import HeaderGraphic from './headerGraphic'
import * as styles from './header.module.css'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState } from 'react'



const Header = () => {

  const [windowWidth, detectWW] = useState(typeof window !== "undefined"? window.innerWidth : 500);
  const [windowHeight, detectWH] = useState(typeof window !== "undefined" ? window.innerHeight : 500);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const detectSize = () => {
      detectWW(typeof window !== "undefined"? window.innerWidth : 500);
      detectWH(typeof window !== "undefined"? window.innerHeight : 500);
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
    <header className={styles.header} style={{position: scrollPosition > (windowWidth / 2) ? 'sticky' : 'sticky'}}>
      <div className={styles.title} style={{ left: `${Math.min(Math.max(-(100 * scrollPosition) / windowWidth, -50), 0 )}vw` }}>
        <span className={styles.text}>
          <h1>Jan Wermeckes</h1>
        </span>
      </div>

      <div className={styles.rightSection} style={{ left: `${Math.min(Math.max(50 - (100 * scrollPosition) / windowWidth, 0), 50)}vw`}}>
        <HeaderGraphic />
        <section>
          <h3>Software-Entwickler</h3>
          <h3>Alpinist</h3>
          <h3>Test</h3>
        </section>
      </div>
      
    </header>
  )
}

export default Header
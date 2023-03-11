import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby'
import GithubCard from './githubCard/githubCard';
import * as styles from './githubSection.module.css'
import React, { useState, useEffect, useRef } from 'react'

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

const GithubSection = () => {
    const githubReposData = useStaticQuery(graphql`
    query GithubReposQuery {
        allGithubReposJson {
          edges {
            node {
              repoName
              title
            }
          }
        }
      }
  `);

    //title heigth
    const [titleHeight, setTitleHeight] = useState(0)
    const titleRef = useRef(null)
    useEffect(() => {
        setTitleHeight(titleRef.current.clientHeight);
    })

    //window height
    const [windowHeight, detectWH] = useState(typeof window !== "undefined" ? window.innerHeight : 1000);
    useEffect(() => {
        const detectSize = () => {
            detectWH(typeof window !== "undefined" ? window.innerHeight : 0);
        }
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [])

    const cardRef = useRef(null);
    const [cardHeight, setCardHeight] = useState(0)
    useEffect(() => {
        setCardHeight(cardRef.current.clientHeight);
    })
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: [`0 0`, `1 1`]
    });
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, (cardHeight - windowHeight)]);
    const c = useTransform(scrollYProgress, [0,0.15,0.85, 1], ["#bacfdb", "#7695ab", "#7695ab", "#bacfdb"])
    const m = windowHeight-titleHeight <= 0 ? (50 + (titleHeight - windowHeight) / 2) : 0;

    return (
        <motion.section className={styles.githubSection} id='github' style={{marginTop: m, marginBottom: m}}>
            <motion.div style={{ translateY: yOffset }} className={styles.title}>
                <a href='https://www.github.com/jan2210/' target="_blank" rel="noreferrer" title='Github'>
                    <motion.h2 ref={titleRef} style={{ color: c }}>Git<br />Hub</motion.h2></a>
            </motion.div>

            <motion.div className={styles.cards} ref={cardRef} style={{ paddingTop: ((windowHeight - titleHeight) / 2), paddingBottom: ((windowHeight - titleHeight) / 2) }}>
                {
                    githubReposData.allGithubReposJson.edges.map((item, index) => {
                        return (
                            <GithubCard repoName={item.node.repoName} key={index} />
                        )
                    })
                }
            </motion.div>
        </motion.section>
    )
}

export default GithubSection
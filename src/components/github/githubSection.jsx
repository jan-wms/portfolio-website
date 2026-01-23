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
    const repositories = useStaticQuery(graphql`
    query AllRepos {
        allReposJson {
            nodes {
                repos
            }
        }
    }
  `);

    //title height
    const [titleHeight, setTitleHeight] = useState(0)
    const titleRef = useRef(null)
    useEffect(() => {
        setTitleHeight(titleRef.current.clientHeight);
    }, [])

    //window height
    const [windowHeight, detectWH] = useState(typeof window !== "undefined" ? window.innerHeight : 1000);
    const [windowWidth, detectWW] = useState(typeof window !== "undefined" ? window.innerWidth : 1000);
    useEffect(() => {
        const detectSize = () => {
            detectWH(typeof window !== "undefined" ? window.innerHeight : 0);
            detectWW(typeof window !== "undefined" ? window.innerWidth : 0);
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
    }, [])
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: [`0 0`, `1 1`]
    });
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, (cardHeight - windowHeight)]);
    const color = useTransform(scrollYProgress, [0, 0.15], [windowWidth < 1000 ? "#7695ab" : "#bacfdb", "#7695ab",])
    const margin = windowWidth < 1000 ? 150 : Math.max((150 - (windowHeight - titleHeight) / 2), 0);

    return (
        <motion.section className={styles.githubSection} id='github' style={{ marginTop: margin, marginBottom: margin }}>
            <motion.div style={{ translateY: windowWidth < 1000 ? 0 : yOffset }} className={styles.title}>
                <a href='https://www.github.com/jan-wms/' target="_blank" rel="noreferrer nofollow" title='Github'>
                    <motion.h2 ref={titleRef} style={{ color: color }}>Git<br />Hub</motion.h2></a>
            </motion.div>

            <motion.div className={styles.cards} ref={cardRef} style={{ paddingTop: windowWidth >= 1000 ? ((windowHeight - titleHeight) / 2) : 0, paddingBottom: windowWidth >= 1000 ? ((windowHeight - titleHeight) / 2) : 0 }}>
                {
                    repositories.allReposJson.nodes[0].repos.map((name, index) => {
                        return (
                            <GithubCard repoName={name} key={index} />
                        )
                    })
                }
            </motion.div>
        </motion.section>
    )
}

export default GithubSection
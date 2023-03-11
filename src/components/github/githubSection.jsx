import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby'
import GithubCard from './githubCard/githubCard';
import * as styles from './githubSection.module.css'
import React, { useState, useEffect, useRef } from 'react'
import { StickyContainer, Sticky } from 'react-sticky';

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
        //offset: [`-${(windowHeight - titleHeight) / 2 }px`, `1 ${1-((windowHeight - titleHeight) / (2 * windowHeight))}`]
        //offset: [`0 ${(windowHeight - titleHeight) / (2 * windowHeight)}`, `1 ${1 - ((windowHeight - titleHeight) / (2 * windowHeight))}`]
    });
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, (cardHeight - windowHeight)]);




    return (
        <section className={styles.githubSection} id='github'>
            <motion.div  style={{ translateY: yOffset }} className={styles.title}>
                <a href='https://www.github.com/jan2210/' target="_blank" rel="noreferrer">
                <h2 ref={titleRef}>Git<br />Hub</h2></a>
            </motion.div>

            <motion.div className={styles.cards} ref={cardRef} style={{paddingTop: ((windowHeight- titleHeight) / 2), paddingBottom: ((windowHeight- titleHeight) / 2)}}>
                {
                    githubReposData.allGithubReposJson.edges.map((item, index) => {
                        return (
                            <GithubCard repoName={item.node.repoName} key={index} />
                        )
                    })
                }
            </motion.div>
        </section>
    )
}

export default GithubSection
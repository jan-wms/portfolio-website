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
        setTitleHeight(titleRef.current.clientHeight)
    })

    //window height
    const [windowHeight, detectWH] = useState(typeof window !== "undefined" ? window.innerHeight : 100);
    useEffect(() => {
        const detectSize = () => {
            detectWH(typeof window !== "undefined" ? window.innerHeight : 500);
        }
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [])

    const cardRef = useRef(null);
    const [cardHeight, setCardHeight] = useState(0)
    useEffect(() => {
        setCardHeight(cardRef.current.clientHeight)
    })
    const { scrollYProgress } = useScroll({
        target: cardRef,
        //offset: [`0 0`, `1 1`]
        offset: [`0 ${(windowHeight - titleHeight) / (2 * windowHeight)}`, `1 ${1-((windowHeight - titleHeight) / (2 * windowHeight))}`]
        //offset: [`0 ${(windowHeight - titleHeight) / (2 * windowHeight)}`, `1 ${1 - ((windowHeight - titleHeight) / (2 * windowHeight))}`]
    });
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, (cardHeight - titleHeight)]);




    return (
        <section className={styles.githubSection} id='github'>
            <motion.div ref={titleRef} style={{ translateY: yOffset }} className={styles.title}>
                <a href='https://www.github.com/jan2210/' target="_blank" rel="noreferrer"></a>
                <h2>Git<br />Hub</h2>
            </motion.div>

            <div className={styles.cards} ref={cardRef}>
                {
                    githubReposData.allGithubReposJson.edges.map((item, index) => {
                        return (
                            <GithubCard repoName={item.node.repoName} key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default GithubSection
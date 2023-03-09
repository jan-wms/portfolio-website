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
    const [titleHeight, setHeight] = useState(0)
    const titleRef = useRef(null)
    useEffect(() => {
        setHeight(titleRef.current.clientHeight)
    })

    //window height
    const [windowHeight, detectWH] = useState(typeof window !== "undefined" ? window.innerHeight : 500);
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
    const { scrollYProgress, scrollY } = useScroll({
        target: cardRef,
        offset: [`-${(windowHeight - titleHeight) / 2}px`, `${(windowHeight - titleHeight) / 2}px`]
        //offset: ["start start", "end end"]
    });
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, windowHeight - titleHeight]);

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
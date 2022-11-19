import React from 'react'
import * as styles from './githubCard.module.css'
import { GoRepo } from "@react-icons/all-files/go/GoRepo"
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar"


const GithubCard = ({ repoName }) => {
    return (
        <div className={styles.githubCard}>

            <h5><GoRepo className={styles.repoIcon} /><a href={`https://www.github.com/jan2210/${repoName}`} target="_blank" rel="noreferrer">Dijkstra2</a></h5>
            <p className={styles.description}>Dijkstra App with Core Data</p>
            <div className={styles.topics}>
                <a href="https://github.com/topics/swift" target="_blank" rel="noreferrer"><p>swift</p></a>
                <a href="https://github.com/topics/dijkstra-algorithm" target="_blank" rel="noreferrer"><p>dijkstra-algorithm</p></a>
                <a href="https://github.com/topics/swiftui" target="_blank" rel="noreferrer"><p>swiftui</p></a>
            </div>
            <div className={styles.footer}>
                <span className={styles.footerItem}>
                    <div className={styles.circle} />
                    <p>Swift</p>
                </span>
                <span className={styles.footerItem}>
                    <AiOutlineStar className={styles.starIcon} />
                    <p>1</p>
                </span>
                <p>Updated on 31 Mar</p>
            </div>
        </div>
    )
}

export default GithubCard
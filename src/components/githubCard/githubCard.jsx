import React from 'react'
import * as styles from './githubCard.module.css'
import { GoRepo } from "@react-icons/all-files/go/GoRepo"


const GithubCard = ({ repoUrl }) => {
    return (
        <div className={styles.githubRepoContainer}>
            
            <h5><GoRepo className={styles.icon} /><a href={repoUrl} target="_blank">Dijkstra2</a></h5>
            <p className={styles.description}>Dijkstra App with Core Data</p>
            <div className={styles.circle}/><p>Swift</p>
            <p>Updated on 31 Mar</p>
        </div>
    )
}

export default GithubCard
import React from 'react'
import * as styles from './githubCard.module.css'
import { GoRepo } from "@react-icons/all-files/go/GoRepo"


const GithubRepoContainer = ({ repoUrl }) => {
    return (
        <div className={styles.githubRepoContainer}>
            <GoRepo />
            <h5>Dijkstra2</h5>
            <p className={styles.description}>Dijkstra App with Core Data</p>
            <div className={styles.circle}/><p>Swift</p>
            <p>Updated on 31 Mar</p>
        </div>
    )
}

export default GithubRepoContainer
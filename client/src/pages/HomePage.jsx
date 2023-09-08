import React from 'react'
import styles from "../dist/HomePage.module.css"
import FolderIcon from '../components/FolderIcon'

const HomePage = () => {
    return (
        <>
            <div className={styles.HomePageContainer}>
                <img src="highQualityHappy.png" className={styles.bgimg} />
            </div>
            <FolderIcon />
        </>
    )
}

export default HomePage
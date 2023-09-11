import React from 'react'
import styles from "./FolderIcon.module.scss"

const FolderIcon = () => {
    return (
        <div className={styles.allFolders}>
            <div className={styles.productContainer}>
                <img src="/icons/icons8-folder-160.png" className={styles.folderIcon} />
                <p className={styles.folderText}>mayze #dizzy newjazz (loopkit + midi & flps) [$14.98]</p>
            </div>
        </div>
    )
}

export default FolderIcon
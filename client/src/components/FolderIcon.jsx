import React from 'react'
import Draggable from "react-draggable";
import styles from "./FolderIcon.module.scss"
import openedFolder from "/icons/icons8-opened-folder-160.png"
import closedFolder from "/icons/icons8-folder-160.png"

const FolderIcon = () => {
    const didClick = (e) => {
        e.preventDefault();
        console.log("Element was clicked")
    }
    return (
        <div className={styles.allFolders}>
            <Draggable>
                <div className={styles.productContainer} onClick={didClick}>
                    <img src={closedFolder} onMouseOver={e => (e.currentTarget.src = openedFolder)} onMouseOut={e => (e.currentTarget.src = closedFolder)} className={styles.folderIcon} />
                    <p>mayze #dizzy newjazz (loopkit + midi & flps) [$14.98]</p>
                </div>
            </Draggable>
        </div >
    )
}

export default FolderIcon
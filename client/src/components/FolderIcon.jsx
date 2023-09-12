import React from 'react'
import Draggable from "react-draggable";
import styles from "./FolderIcon.module.scss"
import openedFolder from "/icons/openFolder.png"
import closedFolder from "/icons/closedFolder.png"

const FolderIcon = () => {
    const didDoubleClick = (e) => {
        e.preventDefault();
        console.log("Element was double clicked")
    }
    return (
        <div className={styles.allFolders}>
            <Draggable>
                <div className={styles.productContainer} onDoubleClick={didDoubleClick}>
                    <img src={closedFolder} onMouseOver={e => (e.currentTarget.src = openedFolder)} onMouseOut={e => (e.currentTarget.src = closedFolder)} className={styles.folderIcon} />
                    <p>mayze #dizzy newjazz (loopkit + midi & flps) [$14.98]</p>
                </div>
            </Draggable>
        </div >
    )
}

export default FolderIcon
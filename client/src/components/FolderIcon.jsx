import React from 'react'
import { useFinderStore } from '../stores/finderStore';
import Draggable from "react-draggable";
import styles from "./FolderIcon.module.scss"
import openedFolder from "/icons/openFolder.png"
import closedFolder from "/icons/closedFolder.png"
import FinderComponent from './FinderComponent';

const FolderIcon = () => {
    const setFinderOpen = useFinderStore((state) => state.openFinder)
    const finder = useFinderStore((state) => state.isFinderOpen)
    console.log(useFinderStore((state) => state.isFinderOpen))

    if (finder) {
        return (
            <FinderComponent />
        )
    }
    return (
        <div className={styles.allFolders}>
            <Draggable>
                <div className={styles.productContainer}>
                    <img src={closedFolder} onClick={() => setFinderOpen()} onMouseOver={e => (e.currentTarget.src = openedFolder)} onMouseOut={e => (e.currentTarget.src = closedFolder)} className={styles.folderIcon} />
                    <p>mayze #dizzy newjazz (loopkit + midi & flps) [$14.98]</p>
                </div>
            </Draggable>
        </div >
    )
}

export default FolderIcon
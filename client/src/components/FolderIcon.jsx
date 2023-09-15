import React from 'react'
import { useFinderStore } from '../stores/finderStore';
import Draggable from "react-draggable";
import styles from "./FolderIcon.module.scss"
import closedFolder from "/icons/closedFolder.png"
import FinderComponent from './FinderComponent';
import { useCategoriesStore } from '../stores/categoriesStore.js';


const FolderIcon = () => {
    const setFinderOpen = useFinderStore((state) => state.openFinder)
    const setActiveCategory = useCategoriesStore((state) => state.setActiveCategory)
    const finder = useFinderStore((state) => state.isFinderOpen)
    console.log(useFinderStore((state) => state.isFinderOpen))
    const statefulCategories = useCategoriesStore((state) => state.categories)

    const setFinderSetCategory = (productCategory) => {
        setFinderOpen();
        setActiveCategory(productCategory);
    }

    const productCategories = statefulCategories.map((category, index) => {
        return (
            <>
                <Draggable>
                    <div className={styles.productContainer} onDoubleClick={() => setFinderSetCategory(category)} onTouchStart={() => setFinderSetCategory(category)}>
                        <img src={closedFolder} className={styles.folderIcon} />
                        <h2 className={styles.categorySubHeader} key={index}>{category}</h2>
                    </div>
                </Draggable >
            </>
        )
    })
    return (
        <>
            <div className={styles.allFolders}>
                {productCategories}
                {finder && <FinderComponent />}
            </div >
        </>
    )
}

export default FolderIcon
import React, { Suspense } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFinderStore } from '../stores/finderStore';
import Draggable from "react-draggable";
import styles from "./FolderIcon.module.scss"
import closedFolder from "/icons/closedFolder.png"
import logInIcon from "/icons/logInIcon.png"
import logoutIcon from "/icons/logout.png"
import FinderComponent from './FinderComponent';
import { useCategoriesStore } from '../stores/categoriesStore.js';
import { useUserStore } from "../stores/userStore.js";
import { UserAuth } from '../context/AuthContext';
import Loading from './Loading';


const FolderIcon = () => {
    const navigate = useNavigate();
    const authUser = useUserStore((state) => state.user);
    const { logout } = UserAuth();
    const setFinderOpen = useFinderStore((state) => state.openFinder)
    const setActiveCategory = useCategoriesStore((state) => state.setActiveCategory)
    const finder = useFinderStore((state) => state.isFinderOpen)
    console.log(useFinderStore((state) => state.isFinderOpen))
    const statefulCategories = useCategoriesStore((state) => state.categories)

    const setFinderSetCategory = (productCategory) => {
        setFinderOpen();
        setActiveCategory(productCategory);
    }

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/')
            console.log("You are logged out")
            console.log(authUser);
        }
        catch (e) {
            console.log(e.message)
        }
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
    if (productCategories.length != 5) {
        return (
            <></>
        )
    }
    else {
        return (
            <>
                <div className={styles.allFolders}>
                    {productCategories}
                    {!authUser && <div onClick={() => navigate("login")} className={styles.productContainer}>
                        <img src={logInIcon} className={styles.loginIcon} />
                        <h2 className={styles.categorySubHeader}>Login?</h2>
                    </div>}
                    {authUser && <div onClick={handleLogout} className={styles.productContainer}>
                        <img src={logoutIcon} className={styles.logoutIcon} />
                        <h2 className={styles.categorySubHeader}>Logout</h2>
                    </div>}
                </div >
                {finder && <FinderComponent />}
            </>
        )

    }



}

export default FolderIcon
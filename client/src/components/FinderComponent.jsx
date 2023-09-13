import { useFinderStore } from "../stores/finderStore"
import styles from "./FinderComponent.module.scss";
import Draggable from "react-draggable";
import circle from "../assets/red_circle.png";
import FinderComponentCategories from './FinderComponentCategories'

const FinderComponent = () => {
    const setFinderClose = useFinderStore((state) => state.closeFinder)
    return (
        <Draggable>
            <div className={styles.finderCard}>
                <div className={styles.finderCardSideBar}>
                    <img src={circle} className={styles.exitCircle} onClick={() => setFinderClose()} onTouchStart={() => setFinderClose()} />
                    <h2 className={styles.categoriesText}>Categories</h2>
                    <FinderComponentCategories />
                </div>
                <div className={styles.finderCardBody}></div>
            </div>
        </Draggable>
    )
}

export default FinderComponent
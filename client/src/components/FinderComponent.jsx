import { useFinderStore } from "../stores/finderStore"
import styles from "./FinderComponent.module.scss";
import Draggable from "react-draggable";
import circle from "../assets/red_circle.png"

const FinderComponent = () => {
    const setFinderClose = useFinderStore((state) => state.closeFinder)
    return (
        <Draggable>
            <div className={styles.finderCard}>
                <div className={styles.finderCardHeader}>
                    <img src={circle} className={styles.exitCircle} onClick={() => setFinderClose()} onTouchStart={() => setFinderClose()} />
                    <p className={styles.categoriesText}>Categories</p>
                </div>
                <div className={styles.finderCardBody}></div>
            </div>
        </Draggable>
    )
}

export default FinderComponent
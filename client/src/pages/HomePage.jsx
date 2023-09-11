import styles from "./HomePage.module.scss"
import FolderIcons from '../components/FolderIcon'
import happyFace from '../assets/highQualityHappy.png'

const HomePage = () => {
    return (
        <div className={styles.HomePageContainer}>
            <img src={happyFace} className={styles.bgImg} />
            <FolderIcons />
        </div>
    )
}

export default HomePage
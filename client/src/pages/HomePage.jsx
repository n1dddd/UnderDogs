import styles from "./HomePage.module.scss"
import FolderIcons from '../components/FolderIcon'

const HomePage = () => {
    return (
        <div className={styles.HomePageContainer}>
            <FolderIcons />
        </div>
    )
}

export default HomePage
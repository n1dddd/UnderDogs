import loadingGif from "../assets/loading_500x500.gif"
import styles from "./Loading.module.scss"

const Loading = () => {
    return (
        <div className={styles.loadingComponent}>
            <img src={loadingGif} />
        </div>
    )
}

export default Loading
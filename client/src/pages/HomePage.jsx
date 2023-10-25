import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import styles from "./HomePage.module.scss"
import happyFace from '../assets/highQualityHappy.png'
import ParticlesBackground from "../components/ParticlesBackground"
const HomePage = () => {

    return (
        <>
            <ParticlesBackground />
            <div className={styles.HomePageContainer}>
                <Banner />
                <Navbar />
                < img src={happyFace} className={styles.bgImg} />
            </div>
        </>
    )
}

export default HomePage
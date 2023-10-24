import styles from "./HomePage.module.scss"
import happyFace from '../assets/highQualityHappy.png'
import ParticlesBackground from "../components/ParticlesBackground"
import { useNavigate } from "react-router-dom"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
const HomePage = () => {

    return (
        <>
            <ParticlesBackground />
            <div className={styles.HomePageContainer}>
                <Banner />
                <Navbar />
                <img src={happyFace} className={styles.bgImg} />
            </div>
        </>
    )
}

export default HomePage
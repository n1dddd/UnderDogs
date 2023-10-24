import styles from "./HomePage.module.scss"
import happyFace from '../assets/highQualityHappy.png'
import ParticlesBackground from "../components/ParticlesBackground"
import { useNavigate } from "react-router-dom"
import Banner from "../components/Banner"
const HomePage = () => {
    const navigate = useNavigate();
    const navigateToSignUp = () => {
        navigate("/sign_up")
    }
    const navigateToLogin = () => {
        navigate("/login")
    }
    return (
        <>
            <ParticlesBackground />
            <div className={styles.HomePageContainer}>
                <Banner />
                <img src={happyFace} className={styles.bgImg} />
                <section className={styles.websiteCategories}>
                    <h1 className={styles.menuHeader} onClick={() => navigateToSignUp()}>Sign-Up</h1>
                    <h1 className={styles.menuHeader} onClick={() => navigateToLogin()}>Login</h1>
                    <h1 className={styles.menuHeader}>Products</h1>
                    <h1 className={styles.menuHeader}>Connect</h1>
                </section>
            </div>
        </>
    )
}

export default HomePage
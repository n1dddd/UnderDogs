import styles from './About.module.scss'
import ParticlesBackground from '../components/ParticlesBackground'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import aboutGif from "../assets/2d_ud.gif"

const About = () => {
    return (
        <>
            <ParticlesBackground />
            <div className={styles.aboutContainer}>
                <div className={styles.headerContainer}>
                    <Banner />
                    <Navbar />
                </div>
                <div className={styles.contentContainer}>
                    <h1 className={styles.aboutHeader}>ABOUT</h1>
                    <h2 className={styles.aboutText}>
                        UNDERDOG is a online producer collective.
                        Our goal is to create high quality and unique kits to help you stand out in the ever
                        changing sound of music production. In a world where musical trends shift like quicksand,
                        our mission is crystal clear: to empower you with the tools you need to shine. We strive
                        to innovate & inspire the next generation.
                    </h2>
                    <h2 className={styles.aboutText2}>
                        We&apos;re more than just a producer collective; we&apos;re a mindset.
                        UNDERDOGS, It&apos;s not just a name; it&apos;s who we are.</h2>
                    <img className={styles.aboutGif} src={aboutGif} />
                </div>
            </div>
        </>
    )
}

export default About
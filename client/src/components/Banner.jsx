import styles from "./Banner.module.scss"
import Marquee from "react-fast-marquee"
const Banner = () => {
    return (
        <section className={styles.scrollingBannerContainer}>
            <Marquee loop={0} className={styles.bannerMarquee}>
                <p className={styles.bannerText}>https://underdogs.ooo</p>
                <p className={styles.bannerText}>https://underdogs.ooo</p>
                <p className={styles.bannerText}>https://underdogs.ooo</p>
            </Marquee>
        </section>
    )
}

export default Banner
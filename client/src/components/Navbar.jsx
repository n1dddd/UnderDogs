import styles from "./Navbar.module.scss"
import { useNavigate } from "react-router-dom";
import user from "/icons/user.svg"
const Navbar = () => {
    const navigate = useNavigate();
    const navigateToSignUp = () => {
        navigate("/sign_up")
    }
    const navigateToLogin = () => {
        navigate("/login")
    }
    return (
        <section className={styles.websiteCategories}>
            <div className={styles.leftSideMenuBar}>
                <p className={styles.menuHeader}>Products</p>
                <p className={styles.menuHeader}>Connect</p>
            </div>
            <div className={styles.rightSideMenuBar}>
                <img className={styles.userIcon} src={user} />
            </div>
        </section>
    )
}

export default Navbar
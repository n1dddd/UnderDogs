import styles from "./Navbar.module.scss"
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore.js";
import { UserAuth } from '../context/AuthContext';
import user from "/icons/userprofile.svg"
import logoutIcon from "/icons/logout.svg"
import DropdownComponent from "./DropdownComponent";
const Navbar = () => {
    const authUser = useUserStore((state) => state.user);
    const { logout } = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout();
            navigate('/')
            console.log("You are logged out")
            console.log(authUser);
        }
        catch (e) {
            console.log(e.message)
        }
    }

    if (!authUser) {
        return (
            <nav className={styles.websiteCategories}>
                <div className={styles.leftSideMenuBar}>
                    <DropdownComponent />
                    <p className={styles.menuHeader}>Connect</p>
                </div>
                <div className={styles.rightSideMenuBar} onClick={() => navigate('/login')}>
                    <p className={styles.menuHeader}>Login</p>
                    <img className={styles.userIcon} src={user} />
                </div>
            </nav >
        )
    } else if (authUser) {
        return (
            <nav className={styles.websiteCategories}>
                <div className={styles.leftSideMenuBar}>
                    <DropdownComponent />
                    <p className={styles.menuHeader}>Connect</p>
                </div>
                <div className={styles.rightSideMenuBar} onClick={() => handleLogout()}>
                    <p className={styles.userStatusHeader}>Logout</p>
                    <img className={styles.logoutIcon} src={logoutIcon} />
                </div>
            </nav>
        )
    }
}

export default Navbar
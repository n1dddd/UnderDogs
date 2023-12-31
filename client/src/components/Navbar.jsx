import styles from "./Navbar.module.scss"
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore.js";
import { UserAuth } from '../context/AuthContext';
import user from "/icons/userprofile.svg"
import logoutIcon from "/icons/logout.svg"
import DropdownComponent from "./DropdownComponent";
import homePageButton from "../assets/2d2.gif"
import cartButton from "/icons/cartIcon.svg"
import { useCartStore } from "../stores/cartStore.js";
const Navbar = () => {
    const authUser = useUserStore((state) => state.user);
    const cartItems = useCartStore((state) => state.cart);
    const cartItemsCount = cartItems.length;
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
                    <p onClick={() => navigate('/About')} className={styles.menuHeader}>About</p>
                </div>
                <img className={styles.homePageButton} src={homePageButton} onClick={() => navigate('/')} />
                <div className={styles.rightSideMenuBar}>
                    <div className={styles.authStatusSection} onClick={() => navigate('/login')}>
                        <p className={styles.userStatusHeader}>Login</p>
                        <img className={styles.userIcon} src={user} />
                    </div>
                    <div className={styles.cartSection} onClick={() => navigate('/cart')}>
                        <p className={styles.cartHeader}>Cart </p>
                        <img className={styles.cartIcon} src={cartButton} />
                        ({cartItemsCount})
                    </div>
                </div>
            </nav >
        )
    } else if (authUser) {
        return (
            <nav className={styles.websiteCategories}>
                <div className={styles.leftSideMenuBar}>
                    <DropdownComponent />
                    <p onClick={() => navigate('/About')} className={styles.menuHeader}>About</p>
                </div>
                <img className={styles.homePageButton} src={homePageButton} onClick={() => navigate('/')} />
                <div className={styles.rightSideMenuBar} >
                    <div className={styles.authStatusSection} onClick={() => handleLogout()}>
                        <p className={styles.userStatusHeader}>Logout</p>
                        <img className={styles.logoutIcon} src={logoutIcon} />
                    </div>
                    <div className={styles.cartSection} onClick={() => navigate('/cart')}>
                        <p className={styles.cartHeader}>Cart</p>
                        <img className={styles.cartIcon} src={cartButton} />
                        ({cartItemsCount})
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
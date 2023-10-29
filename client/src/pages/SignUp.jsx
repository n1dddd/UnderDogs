import React, { useState } from 'react'
import styles from "./SignUp.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import ParticlesBackground from '../components/ParticlesBackground'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { createUser } = UserAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await createUser(email, password);
            navigate("/")
        }
        catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
    return (
        <>
            <ParticlesBackground />
            <div className={styles.headerContainer}>
                <Banner />
                <Navbar />
            </div>
            <section className={styles.signUpPageContainer}>
                <div className={styles.authCard}>
                    <h1 className={styles.authCardHeader}>Sign Up</h1>
                    <form className={styles.authForm} onSubmit={handleSubmit}>
                        <div className={styles.emailPassInput}>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className={styles.inputField}></input>
                            <label>
                                Email Address
                            </label>
                        </div>
                        <div className={styles.emailPassInput}>
                            <input type="password" className={styles.inputField} onChange={(e) => setPassword(e.target.value)}></input>
                            <label>
                                Password
                            </label>
                        </div>
                        <button className={styles.authButton}>Sign Up</button>
                    </form>
                    <p className={styles.authRoute}>Already have an account? <Link to="/login" className={styles.linkUnderline} >Sign In.</Link></p>
                </div>
            </section>
        </>
    )
}

export default SignUp
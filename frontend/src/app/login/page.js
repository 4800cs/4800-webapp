"use client";

import { useState } from 'react';
import styles from '../styles/login-page.module.css';
import Image from "next/image";
import Link from 'next/link';
import * as Fetch from '../../components/Functions';
import Navbar from "../../components/Navbar";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Clear any previous error
        setError('');

        if (await Fetch.login(username, password)){
            window.location.href = '/social-media-app';
        } else {
            setError('Invalid username or password');
        }
        
    };

    return (
        <div>
            <Navbar/>
            <div className={styles.container}>
                    <div className={styles.tabs}>
                        <button type="active" className={styles.active}>Sign In</button>
                        <button type="label" className={styles.tab}><Link href="/sign-up">Create Account</Link></button>
                    </div>
                    <form className="p-6" onSubmit={handleSubmit}>
                        <label type="label" className={styles.inputGroup}>
                            Username
                            <input
                                type="input"
                                className={styles.inputGroup}
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label type="label" className={styles.inputGroup}>
                            Password
                            <input
                                type="password"
                                className={styles.inputGroup}
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <Link href="/sign-up" className={styles.noAccount}>Don't have an account?</Link>
                        {error && <p className="text-red-500">{error}</p>}
                        <button type="submit" className={styles.submitButton}>Sign In</button>
                    </form>
                    
            </div>
            
        </div>
    );
};

export default LoginForm;

{/*return (
    <div>
        <Navbar/>
        <div className={styles.container}>
                <div className={styles.tabs}>
                    <button type="active" className={styles.active}>Sign In</button>
                    <button type="submit" className={styles.tab}>Create Account</button>
                </div>
                <form className="p-6" onSubmit={handleSubmit}>
                    <label type="label" className={styles.inputGroup}>
                        Username
                        <input
                            type="input"
                            className={styles.inputGroup}
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            
                        />
                    </label>
                    <label type="label" className={styles.inputGroup}>
                        Password
                        <input
                            type="password"
                            className={styles.inputGroup}
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <Link href="/sign-up" className={styles.noAccount}>Don't have an account?</Link>
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className={styles.submitButton}>Sign In</button>
                </form>
        </div>
    </div>
    );
};*/}
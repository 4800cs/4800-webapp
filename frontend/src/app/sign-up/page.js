"use client";

import styles from '../styles/login-page.module.css';
import Link from 'next/link';
import { useState } from 'react';
import * as Fetch from '../../components/Functions';

export default function SignUp() {
	const [userData, setUserData] = useState({
		username: '',
		password: '',
		confirmPassword: '',
		email: '',
		fullName: '',
		phoneNumber: '',
		address: '',
		city: '',
		state: '',
		zipCode: '',
	});

	const handleInputChange = (e) => {
	const { name, value } = e.target;
		setUserData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const createUser = async () => {
	    Fetch.createAccount(userData);
	};

    return(
          <div className={styles.container}>
            <div className={styles.tabs}>
              <button type="label" className={styles.tab}><Link href="/login">Sign In</Link></button>
              <button type="active" className={styles.active}>Create Account</button>
            </div>
              <form className="p-6" onSubmit={(e) => e.preventDefault()}>
                <label type="label" className={styles.inputGroup}>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your Full Name"
                    value={userData.fullName}
                    onChange={handleInputChange}
                    className={styles.inputGroup}
                  />
                  <input
                    type="input"
                    name="username"
                    placeholder="Create a Username"
                    value={userData.username}
                    onChange={handleInputChange}
                    className={styles.inputGroup}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a Password"
                    value={userData.password}
                    onChange={handleInputChange}
                    className={styles.inputGroup}
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your Password"
                    value={userData.confirmPassword}
                    onChange={handleInputChange}
                    className={styles.inputGroup}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className={styles.inputGroup}
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your Phone Number"
                    value={userData.phoneNumber}
                    onChange={handleInputChange}
                    className={styles.inputGroup}
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your Street Address"
                    value={userData.address}
                    onChange={handleInputChange}
                    className={styles.inputGroup}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your City"
                    value={userData.city}
                    onChange={handleInputChange}
                    className={styles.inputGroup}
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="Enter your State"
                    value={userData.state}
                    onChange={handleInputChange}
                    className={styles.inputGroup}
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Enter your Zip Code"
                    value={userData.zipCode}
                    onChange={handleInputChange}
                    className={styles.inputGroup}
                  />
                </label>
                  <Link href="/login" className={styles.haveAccount}>
                    Already Registered?
                  </Link>
                  {/* Add the button here */}
                  <button
                    type="button"
                    onClick={createUser}
                    className={styles.submitButton}
                  >
                    Sign Up
                  </button>
              </form>
          </div>
    );
}

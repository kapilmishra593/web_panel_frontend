"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState  } from "react";
// import styles from '../styles/dashboardApp.module.scss';
import styles from '../app/page.module.scss';
import Login from "../forms/login";
import Signup from "../forms/signup";

export default function Home() {
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap");
    }, []);
    const handleClick = () => {
        setToggle(!toggle)
    };
    if (toggle) {
        return (
            <>
                <main className={`layoutContainer container-fluid ${styles.form_layout}`}>
                    <div className={styles.auth_form}>
                        <div className={`row ${styles.form_content}`}>
                            <div className="col-7">
                                <div className={styles.form_left}>
                                    <h1 className='text-5xl leading-tight font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className={styles.form_right}>
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum qui rerum cumque earum laborum eveniet ipsam facere eos repudiandae.</p>
                                    <Login />
                                    <div className="login-btn text-center mt-4">
                                        <button onClick={handleClick} className="text-center">create new account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
        
    } else {    
        return (
            <>
                <main className={`layoutContainer container-fluid ${styles.form_layout}`}>
                    <div className={styles.auth_form}>
                        <div className={`row ${styles.form_content}`}>
                            <div className="col-7">
                                <div className={styles.form_left}>
                                    <h1 className='text-5xl leading-tight font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className={styles.form_right}>
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum qui rerum cumque earum laborum eveniet ipsam facere eos repudiandae.</p>
                                    <Signup />
                                    <div className="login-btn text-center mt-4">
                                        <button onClick={handleClick} className="text-center">Log In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

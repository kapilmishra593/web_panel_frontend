"use client"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from '../Sidebar/sideBar.module.scss';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navMenu } from '../../data/NavSideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Link from 'next/link';

export default function Sidebar() {
    const [display, setDisplay] = useState(false);
    const toggle = () => setDisplay(!display);

    return (
        <>
            <div className={`${styles.sideBar} ${display ? ' show' : 'hide'} sidebar`}>
                <div className={`${styles.layoutSidebar} position-sticky`}>
                    <div className={`${styles.menuList}`}>
                        <div className={styles.topIcon} onClick={toggle}>
                            <FontAwesomeIcon icon={faBars} className={`${styles.barIcons}`} />
                        </div>
                        <ul className={`${styles.layoutMenu}`}>
                            <li className={styles.layoutMenuItem}>
                                {navMenu.map((menus: any, index: any) => {
                                    return (
                                        <Link key={index} to={menus.path} className={`${styles.layoutMenuLink} ${styles.active} active layoutMenuLink`}>
                                            <span className={styles.icons}>{menus.icons}</span>
                                            {menus.name}
                                        </Link>
                                    );
                                })}
                            </li>
                        </ul>
                    </div>
                </div>
                <style jsx>
                    {
                        `
                            .show {
                                width: 200px;
                                border-bottom-right-radius: 30px;
                                border-top-right-radius: 30px;
                                padding: 35px 0px;
                            }
                        `
                    }
                </style>
            </div>
        </>
    )
}
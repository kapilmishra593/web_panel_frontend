"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/dashboard.module.scss';
import DashMidContent from '../../components/dashboard/DashMidContent/dashMidContent';
import RightContent from '../../components/dashboard/DashRightContent/rightContent';
import MyCanvasComponent from "../../components/MyCanvasComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
    return (
        <>
            <div className="row">
                <div className="col-lg-8 col-xl-9">
                    <div className={styles.dash_content}>
                        <div className={styles.searchWrap}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search"
                            />
                        </div>
                        <div className={`${styles.flexBar} d-flex`}>
                            <div className={`${styles.leftBar} leftBar`}>
                                <h1 className={`${styles.title} text-4`}>
                                    Hello Alwad
                                </h1>
                                <p className={styles.smallText}>Welcome back</p>
                            </div>
                            <div className="rightBar">
                                <div className={styles.search}>
                                    <input type="search" placeholder="Filters" />
                                    <FontAwesomeIcon icon={faSliders} className={styles.searchIcon} />
                                </div>
                            </div>
                        </div>
                        <DashMidContent />
                    </div>
                </div>
                <div className={`${styles.col2} col-lg-4 col-xl-3`}>
                    <RightContent />
                    <MyCanvasComponent />
                </div>
            </div>
        </>
    )
}
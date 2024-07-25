"use client"
import React from 'react';
import styles from './dashMidContent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import LeftTable from '../DashTable/leftTable/leftTable';


export default function DashMidContent() {
    return (
        <>
            <div className={`${styles.inner} inner`}>           
                <div className="row">
                    <div className="col-md-4">
                        <div className={`${styles.card} card shadow-sm`}>
                            <div className={styles.imageFlex}>
                                <Image src="/business_3.svg" width={49} height={49} alt='' />
                                <FontAwesomeIcon icon={faArrowRight} className={styles.circleArrow} />
                            </div>
                            <p className={styles.price}>
                                $15,205.00
                            </p>
                            <div className={styles.content}>
                                <p>Total Sales</p>
                                <p>+32.40</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${styles.card} card shadow-sm`}>
                            <div className={styles.imageFlex}>
                                <Image src="/business_2.svg" width={49} height={49} alt='' />
                                <FontAwesomeIcon icon={faArrowRight} className={styles.circleArrow} />
                            </div>
                            <p className={styles.price}>
                                $15,205.00
                            </p>
                            <div className={styles.content}>
                                <p>Total Sales</p>
                                <p>+32.40</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${styles.card} card shadow-sm`}>
                            <div className={styles.imageFlex}>
                                <Image src="/business_3.svg" width={49} height={49} alt='' />
                                <FontAwesomeIcon icon={faArrowRight} className={styles.circleArrow} />
                            </div>
                            <p className={styles.price}>
                                $15,205.00
                            </p>
                            <div className={styles.content}>
                                <p>Total Sales</p>
                                <p>+32.40</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className={styles.recent}>
                            <h3 className={`${styles.white_color} link-text`}>
                                Recent Transactions
                            </h3>
                            <LeftTable />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className={styles.recent}>
                            <h3 className={`${styles.white_color} link-text`}>
                                Recent Transactions
                            </h3>
                            <LeftTable />
                        </div>
                    </div>
                </div>                
            </div>
        </>
    )
}
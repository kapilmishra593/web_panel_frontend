"use client"
import Image from 'next/image';
import React from 'react';
import styles from '../rightTable/rightTable.module.scss';

export default function RightTable() {
    return (
        <>
            <div className={`${styles.trans} ${styles.rgTrans}`}>
                <div className={styles.scrollList}>
                    <ul className={styles.transLists}>
                        <li className={styles.tFlex}>
                            <Image src="/business_3.svg" width={30} height={30} alt='' />
                            <div className={styles.tContent}>
                                <h5 className={`${styles.cName}`}>
                                    Theresa Web
                                </h5>
                                <p>
                                    2 Minutes Ago
                                </p>
                                <p className={`${styles.tPrice}`}>
                                    <span>$656.00</span>
                                </p>
                            </div>
                        </li>
                        <li className={styles.tFlex}>
                            <Image src="/business_3.svg" width={30} height={30} alt='' />
                            <div className={styles.tContent}>
                                <h5 className={`${styles.cName}`}>
                                    Esther Cooper
                                </h5>
                                <p>
                                    2 Minutes Ago
                                </p>
                                <p className={`${styles.tPrice}`}>
                                    <span>$856.00</span>
                                </p>
                            </div>
                        </li>
                        <li className={styles.tFlex}>
                            <Image src="/business_3.svg" width={30} height={30} alt='' />
                            <div className={styles.tContent}>
                                <h5 className={`${styles.cName}`}>
                                    Floyd Web
                                </h5>
                                <p>
                                    2 Minutes Ago
                                </p>
                                <p className={`${styles.tPrice}`}>
                                    <span>$756.00</span>
                                </p>
                            </div>
                        </li>
                        <li className={styles.tFlex}>
                            <Image src="/business_3.svg" width={30} height={30} alt='' />
                            <div className={styles.tContent}>
                                <h5 className={`${styles.cName}`}>
                                    Bessie Web
                                </h5>
                                <p>
                                    2 Minutes Ago
                                </p>
                                <p className={`${styles.tPrice}`}>
                                    <span>
                                        $856.00
                                    </span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
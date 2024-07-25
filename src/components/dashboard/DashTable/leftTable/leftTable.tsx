"use client"
import Image from 'next/image';
import React from 'react';
import styles from '../leftTable/leftTable.module.scss';

export default function LeftTable() {
    return (
        <>
            <div className={styles.trans}>
                <ul className={styles.transLists}>
                    <li>
                        Company Name
                    </li>
                    <li className='text-center'>
                        Date
                    </li>
                    <li className='text-right'>
                        Amount
                    </li>
                </ul>
                <div className={styles.midScrollList}>
                    <ul className={styles.transLists}>
                        <li className={styles.tFlex}>
                            <Image src="/business_3.svg" width={49} height={49} alt='' />
                            <div className={styles.tContent}>
                                <h5 className={`${styles.cName}`}>
                                    Sikago & Sons
                                </h5>
                                <p>
                                    Uk
                                </p>
                            </div>
                        </li>
                        <li className={styles.date}>
                            10 Jan 2021
                        </li>
                        <li className={styles.price}>
                            $432.25
                        </li>
                    </ul>
                    <ul className={styles.transLists}>
                        <li className={styles.tFlex}>
                            <Image src="/business_3.svg" width={49} height={49} alt='' />
                            <div className={styles.tContent}>
                                <h5 className={`${styles.cName}`}>
                                    Fast Tracks
                                </h5>
                                <p>
                                    USA
                                </p>
                            </div>
                        </li>
                        <li className={styles.date}>
                            5 Oct 2021
                        </li>
                        <li className={styles.price}>
                            $563.25
                        </li>
                    </ul>
                    <ul className={styles.transLists}>
                        <li className={styles.tFlex}>
                            <Image src="/business_3.svg" width={49} height={49} alt='' />
                            <div className={styles.tContent}>
                                <h5 className={`${styles.cName}`}>
                                    Fanish & Company
                                </h5>
                                <p>
                                    India
                                </p>
                            </div>
                        </li>
                        <li className={styles.date}>
                            15 Oct 2021
                        </li>
                        <li className={styles.price}>
                            $256.25
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
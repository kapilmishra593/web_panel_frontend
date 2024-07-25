"use client"
import React from 'react';
import styles from '../DashRightContent/rightContent.module.scss';
import Image from 'next/image';
import RightTable from '../DashTable/rightTable/rightTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function RightContent() {
    return (
        <>
            <div className={`${styles.rightSide} rightSide`}>
                <div className={`${styles.card} card`}>
                    <div className={styles.account}>
                        <FontAwesomeIcon icon={faBell} className={styles.bell} />
                        <Image src="/avatar.svg" alt='' width={30} height={30} />
                    </div>
                    <h3 className={`${styles.white_color} link-text`}>
                        Recent Orders
                    </h3>
                    <RightTable />
                </div>
            </div>
        </>
    )
}
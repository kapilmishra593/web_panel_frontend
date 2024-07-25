"use client"
import React from 'react';
import Listing from '@components/components/listings/listings';
import dashStyle from '../../styles/dashboard.module.scss';
export default function Users() {
    return (
        <>
            <div className={dashStyle.schedule}>
                <div className={dashStyle.shdlFlex}>
                    <div className={dashStyle.content}>
                        <h3 className={`${dashStyle.title} text-4`}>
                            Users
                        </h3>
                        <p>
                            Manage yours account details.
                        </p>
                    </div>
                    {/* <Link className={dashStyle.shdlBtn} href="">
                            Add New User
                        </Link> */}
                </div>
                <Listing dataListKey="userList" />
            </div>
        </>
    )
}
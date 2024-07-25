"use client"
import Listing from '@components/components/listings/listings';
import React from 'react';
import dashStyle from '../../styles/dashboard.module.scss';

export default function Approved() {
    return (
        <>
            <div className={dashStyle.schedule}>
                <div className={dashStyle.shdlFlex}>
                    <div className={dashStyle.content}>
                        <h3 className={`${dashStyle.title} text-4`}>
                            Approval Queue
                        </h3>
                        <p>
                           Pending Approvals for you.
                        </p>
                    </div>
                </div>
               <Listing dataListKey="approvedList" />
            </div>
        </>
    )
}
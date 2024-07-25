"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Users from '@components/layout/users';

export default function DashboardApp({ children }: any) {
    return (
        <>            
             <Users />
        </>
    )
}
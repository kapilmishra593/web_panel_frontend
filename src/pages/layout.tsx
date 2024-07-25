"use client"
import React, { useEffect } from 'react'
import { Inter } from 'next/font/google'
import Sidebar from '@components/components/sidebar/sidebar';
import styles from '../styles/dashboard.module.scss';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })

const DashboardApp = dynamic(() => import('./dashboard'), { ssr: false });
const Media = dynamic(() => import('./media'), { ssr: false });
const Posts = dynamic(() => import('./posts'), { ssr: false });
const Users = dynamic(() => import('./users'), { ssr: false });
const Approval = dynamic(() => import('./approval'), { ssr: false });
const EditPost = dynamic(() => import('./edit-post/index'), { ssr: false });
const AddPost = dynamic(() => import('./add-post/index'), { ssr: false });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        window.self = window;
        document.body.classList.add(window.location.pathname.replace(/\//g, ''), inter.className);
    }, []);
    return (
        <>
            <Router>
                <div className={`${styles.layoutContainer}`}>
                    <Sidebar />
                    <div className={`${styles.mainContent} mainContent`}>
                        <Routes>
                            <Route path="/dashboard" element={<DashboardApp />} />
                            <Route path="/media" element={<Media />} />
                            <Route path="/posts" element={<Posts />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/approval" element={<Approval />} />
                            <Route path="/edit-post" element={<EditPost />} />
                            <Route path="/add-post" element={<AddPost />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}
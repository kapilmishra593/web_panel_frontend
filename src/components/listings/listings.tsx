
"use client"
import Image from 'next/image';
import React from 'react';
import styles from './listings.module.scss';
import { dataLists } from '../../data/UserLists'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, TableContainer } from '@mui/material';


export default function Listing({ dataListKey }: any) {

    const selectedDataList = dataLists[dataListKey];
    
    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }} className={styles.paperRoot}>
                <TableContainer className={`${styles.respTable} table-responsive`}>
                    <Table stickyHeader aria-label="sticky table" className={`${styles.table} ${styles.fixed_header} table table-condensed table-striped fixed_header`}>
                        <TableHead>
                            {selectedDataList.slice(0, 1)?.map((lists: any, index: any) => {
                                return (
                                    <TableRow className={`${styles.headings} table-row`} key={index}>
                                        <TableCell align="center" style={{ borderLeft: '15px solid transparent' }}>
                                            {lists.userId}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.userDetails}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.userRole}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.created}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.login}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.actions}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableHead>
                        <TableBody>
                            {selectedDataList.map((lists: any, index: any) => {
                                return (
                                    <TableRow className={`${styles.tbActive} table-active`} key={index}>
                                        <TableCell align="center">
                                            {lists.ID}
                                        </TableCell>
                                        <TableCell align="center">
                                            <div className={styles.profile}>
                                                <Image src={lists.image} alt='' width={28} height={28} />
                                                <div>
                                                    <p>{lists.name}</p>
                                                    <p>{lists.email}</p>
                                                    <p>{lists.phone}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.role}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.status}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.lastLogin}
                                        </TableCell>
                                        <TableCell align="center">
                                            <div className={styles.actionList}>
                                                <span className={`${styles.approved} ${styles.tag}`}>{lists.icon1}</span>
                                                <span className={`${styles.progress} ${styles.tag}`}>{lists.icon2}</span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <style jsx>
                {
                    `   
                        .table > :not(caption) {
                            background-color: red;
                        }
                        .table-active {
                            --bs-table-bg-state: #e5e5e5;
                        }
                    `
                }
            </style>
        </>
    )
}
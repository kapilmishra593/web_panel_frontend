
"use client"
import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from '../../components/postlisting/style.module.scss';
import { postList } from '../../data/PostLists';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, TableContainer } from '@mui/material';
import Link from 'next/link';
export default function PostListing() {
    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }} className={styles.paperRoot}>
                <TableContainer className={`${styles.respTable} table-responsive`}>
                    <Table stickyHeader aria-label="sticky table" className={`${styles.table} ${styles.fixed_header} table table-condensed table-striped fixed_header`}>
                        <TableHead>
                            <TableRow className={`${styles.headings} table-row`}>
                                <TableCell align="center" style={{ borderLeft: '15px solid transparent' }}>
                                    S.No
                                </TableCell>
                                <TableCell align="center">
                                    Title
                                </TableCell>
                                <TableCell align="center">
                                    Author
                                </TableCell>
                                <TableCell align="center">
                                    Categogies
                                </TableCell>
                                <TableCell align="center">
                                    Tags
                                </TableCell>
                                <TableCell align="center">
                                    Date
                                </TableCell>
                                <TableCell align="center">
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {postList.map((lists: any, index: any) => {
                                return (
                                    <TableRow className={`${styles.tbActive} table-active`} key={index}>
                                        <TableCell align="center">
                                            {lists.index}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.title}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.author}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.categogies}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.tags}
                                        </TableCell>
                                        <TableCell align="center">
                                            {lists.status}<br></br>{lists.date}
                                        </TableCell>
                                        <TableCell align="center" className={styles.actionList}>
                                            <Link href='/edit-post'>
                                                <FontAwesomeIcon icon={faPen} className={`${styles.penBox} ${styles.fIcons}`} />
                                            </Link>
                                            <FontAwesomeIcon icon={faTrashCan} className={`${styles.trashBox} ${styles.fIcons}`} />
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
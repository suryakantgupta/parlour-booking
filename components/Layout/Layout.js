import { AppBar, Box, Container, Toolbar } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/images/gblogo.png'
import styles from './Layout.module.scss';
import Link from 'next/link';

const Layout = (props) => {
    return (
        <>
            <AppBar
                style={{
                    backgroundColor: '#373837'
                }}
                position="static"
            >
                <div
                    style={{
                        height: '100px'
                    }}
                >
                    <Link
                        href='/'
                    >
                        <Image
                            src={Logo}
                            height={100}
                            width={400}
                        // layout="responsive"
                        />
                    </Link>
                </div>
            </AppBar>

            <main
                className={styles.main}
            >
                {props.children}
            </main>
        </>
    )
}

export default Layout
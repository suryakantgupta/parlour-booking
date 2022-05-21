import { AppBar, Box, Container, Toolbar } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/images/gblogo.png'
import styles from './Layout.module.scss';

const Layout = () => {
    return (
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
                <Image
                    src={Logo}
                    height={100}
                    width={400}
                    // layout="responsive"
                />
            </div>
        </AppBar>
    )
}

export default Layout
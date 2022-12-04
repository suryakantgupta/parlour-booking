import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Home.module.scss'
import MakeupIcon from '../../assets/images/makeup-icon.webp';
import HairIcon from '../../assets/images/hair-icon.webp';
import BeauticianIcon from '../../assets/images/beautician-icon.jpg';
import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner2.jpg';
import Banner3 from '../../assets/images/banner3.jpg';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import TabsSection from '../Library/TabsSection/TabsSection';
import ImageGrid from '../Library/ImageGrid/ImageGrid';

const allImages = [
    '/categories/all/1.jpg',
    '/categories/all/2.png',
    '/categories/all/3.png',
    '/categories/all/4.jpg',
    '/categories/all/5.jpg',
    '/categories/all/6.jpg',
    '/categories/all/7.jpg',
    '/categories/all/8.jpg',
    '/categories/all/9.jpg',
    '/categories/all/10.jpg',
    '/categories/all/11.jpg',
    '/categories/all/12.jpg',
    '/categories/all/13.jpg',
    '/categories/all/14.jpg',
    '/categories/all/15.jpg',
    '/categories/all/16.jpg',
    '/categories/all/17.jpg',
    '/categories/all/18.jpg',
    '/categories/all/19.jpg',
    '/categories/all/20.jpg',
    '/categories/all/21.jpg',
    '/categories/all/22.jpg',
    '/categories/all/23.jpg'
]

const tabs = [
    {
        label: 'All'
    },
    // {
    //     label: 'Makeup'
    // },
    // {
    //     label: 'Hair'
    // },
    // {
    //     label: 'Tatoos'
    // }
]

const Home = () => {

    const router = useRouter()

    return (
        <div
            className={styles.form_home_container}
        >
            <div
                style={{
                    marginTop: 18
                }}
            >
                <Button
                    style={{
                        backgroundColor: 'black'
                    }}
                    variant="contained"
                    onClick={() => {
                        router.push('book-now')
                    }}
                >
                    Book Now
                </Button>
            </div>
            <div
                className={styles.home_container}
            >
                {/* <div
                    className={styles.swiper_container}
                >
                    <Swiper
                        className={styles.swiper_container}
                        // navigation={xlScreen ? true : false}
                        // loop={true}
                        pagination={true}
                        observeParents={true}
                        observer={true}
                        slidesPerGroup={1}
                        slidesPerView={1}
                    // breakpoints={categoryChipsBreakpoint}
                    >
                        <SwiperSlide>
                            <div
                                style={{
                                    width: '100%'
                                }}
                            >
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'none'
                                    }}
                                    src={Banner1.src}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                style={{
                                    width: '100%'
                                }}
                            >
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'none'
                                    }}
                                    src={Banner2.src}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                style={{
                                    width: '100%'
                                }}
                            >
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'none'
                                    }}
                                    src={Banner3.src}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div
                    className={styles.my_work_btn_container}
                >
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => router.push('/gallery')}
                    >
                        View My Work
                    </Button>
                </div> */}

                <TabsSection
                    tabs={tabs}
                    tabsBody={[
                        {
                            component: (
                                <ImageGrid
                                    images={allImages}
                                />
                            )
                        }
                    ]}
                />


                {/* <h1>
                    Services
                </h1>
                <div
                    className={styles.services_container}
                >
                    <div
                        className={styles.service}
                    >
                        <div
                            className={styles.service_image_container}
                        >
                            <Image
                                src={MakeupIcon}
                                height={170}
                                width={170}
                            />
                        </div>
                        Makeup
                    </div>

                    <div
                        className={styles.service}
                    >
                        <div
                            className={styles.service_image_container}
                        >
                            <Image
                                src={HairIcon}
                                height={170}
                                width={170}
                            />
                        </div>
                        Hair treatment
                    </div>

                    <div
                        className={styles.service}
                    >
                        <div
                            className={styles.service_image_container}
                        >
                            <Image
                                src={BeauticianIcon}
                                height={170}
                                width={170}
                            />
                        </div>
                        Beautician
                    </div>
                </div> */}
            </div>

            <div
                style={{
                    marginTop: 18
                }}
            >
                <Button
                    style={{
                        backgroundColor: 'black'
                    }}
                    variant="contained"
                    onClick={() => {
                        router.push('book-now')
                    }}
                >
                    Book Now
                </Button>
            </div>
        </div>
    )
}

export default Home
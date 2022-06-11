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

const Home = () => {
    return (
        <div
            className={styles.home_container}
        >
            <div
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
            <h1>
                Services
            </h1>
            <div
                className={styles.services_container}
            >
                <div
                    className={styles.service}
                >
                    <div>
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
                    <div>
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
                    <div>
                        <Image
                            src={BeauticianIcon}
                            height={170}
                            width={170}
                        />
                    </div>
                    Beautician
                </div>
            </div>
        </div>
    )
}

export default Home
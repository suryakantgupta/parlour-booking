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

const Home = () => {

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            mobile: null,
            note: ''
        },

        onSubmit: (values) => {

        }
    })


    return (
        <div
            className={styles.form_home_container}
        >
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
                </div>
            </div>

            <div
                className={styles.form_container}
            >
                <form
                    style={{
                        width: '100%'
                    }}
                    onSubmit={formik.handleSubmit}
                >
                    <h1
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        Contact Form
                    </h1>
                    <div
                        className={styles.formsection}
                    >
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            id="fullName"
                            name="fullName"
                            type="text"
                            fullWidth
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                        />
                    </div>

                    <div
                        className={styles.formsection}
                    >
                        <TextField
                            label="Email"
                            variant="outlined"
                            id="email"
                            name="email"
                            type="email"
                            fullWidth
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </div>

                    <div
                        className={styles.formsection}
                    >
                        <TextField
                            label="Mobile No"
                            variant="outlined"
                            id="mobile"
                            name="mobile"
                            type="text"
                            fullWidth
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                            helperText={formik.touched.mobile && formik.errors.mobile}
                        />
                    </div>

                    <div
                        className={styles.formsection}
                    >
                        <TextField
                            label="Note"
                            variant="outlined"
                            id="note"
                            name="note"
                            type="text"
                            fullWidth
                            multiline
                            rows={2}
                            value={formik.values.note}
                            onChange={formik.handleChange}
                            error={formik.touched.note && Boolean(formik.errors.note)}
                            helperText={formik.touched.note && formik.errors.note}
                        />
                    </div>

                    <Button
                        type='submit'
                        variant='contained'
                        color='secondary'
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Home
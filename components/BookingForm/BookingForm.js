import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'
import styles from './BookingForm.module.scss'

const BookingForm = () => {

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: null,
            note: ''
        },

        onSubmit: (values) => {
            axios.post('/api/bookings', values)
                .then(() => {
                    toast.success('Thank you, we will contact you on the provided number')
                    // router.push('/')
                })
        }
    })

    return (
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
                        textAlign: 'center',
                        margin: '5px 0'
                    }}
                >
                    Booking Form
                </h1>
                <div
                    style={{
                        textAlign: 'center'
                    }}
                >
                    We will contact you in 24hrs
                </div>
                <div
                    className={styles.formsection}
                >
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        id="name"
                        name="name"
                        type="text"
                        fullWidth
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        required={true}
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
                        required={true}
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

                <div
                    style={{
                        margin: '8px 0',
                        textAlign: 'center'
                    }}
                >
                    For any urgent enquiry contact on <b>7979974662 / 8805060941</b>
                </div>
            </form>
        </div>
    )
}

export default BookingForm
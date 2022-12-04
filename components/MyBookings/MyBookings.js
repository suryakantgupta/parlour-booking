import React from 'react'
import BookingCard from './BookingCard/BookingCard'
import styles from './MyBookings.module.scss'

const MyBookings = (props) => {
    return (
        <div
            className={styles.container}
        >
            {props.bookings.map((data) => (
                <BookingCard
                    {...data}
                />
            ))}
        </div>
    )
}

export default MyBookings
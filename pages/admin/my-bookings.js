import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MyBookings from '../../components/MyBookings/MyBookings'

const MyBookingsRoute = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
      axios.get('/api/bookings')
        .then((response) => {
          setBookings(response.data)
        })
    }, [])
  

  return (
    <MyBookings bookings={bookings} />
  )
}

export default MyBookingsRoute
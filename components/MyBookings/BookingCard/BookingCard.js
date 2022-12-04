import React from 'react'

const BookingCard = (props) => {
    return (
        <div
            style={{
                margin: '5px 0',
                boxShadow: '0 0 10px lightgray',
                width: '100%',
                padding: 10
            }}
        >
            <div>
                {props.name}
            </div>
            <div>
                {props.email}
            </div>
            <div>
                {props.mobile}
            </div>
            <div>
                {props.note}
            </div>
        </div>
    )
}

export default BookingCard
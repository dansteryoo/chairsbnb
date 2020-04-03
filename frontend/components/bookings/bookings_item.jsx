import React from 'react';
import { Link } from 'react-router-dom';

const BookingsItems = ({ booking, deleteBooking, openModal }) => {
    
    let month = booking.start_date.slice(5, 7);

    switch (month) {
        case '01':
            month = 'Jan'
            break;
        case '02':
            month = 'Feb'
            break;
        case '03':
            month = 'Mar'
            break;
        case '04':
            month = 'Apr'
            break;
        case '05':
            month = 'May'
            break;
        case '06':
            month = 'Jun'
            break;
        case '07':
            month = 'Jul'
            break;
        case '08':
            month = 'Aug'
            break;
        case '09':
            month = 'Sep'
            break;
        case '10':
            month = 'Oct'
            break;
        case '11':
            month = 'Nov'
            break;
        case '12':
            month = 'Dec'
            break;
    };

    let dates = `${booking.start_date.slice(8)} - ${booking.end_date.slice(8)}`;

    let bookingDates = `${month} ${dates}`;
    
    return (
        <li className='booking-li'>
            <div className='booking-item-container'>
                <Link to={`/listings/${booking.listing_id}`}>
                    <div className='booking-image'>
                        <img src={booking.images[0]} />
                    </div>

                </Link>
                <div className='booking-info'>
                    <div className='booking-dates'>
                        <span>{bookingDates}</span>
                    </div>
                    <div className='booking-location'>
                        <span>{booking.location}</span>
                    </div>
                </div>
                <div className='booking-preview'>
                    <div className='preview-image'>
                        <img src={booking.images[1]} />
                    </div>
                    <div className='preview-name'>
                        <span>{booking.name}</span>
                    </div>
                </div>
                <div className='booking-bottom'>
                    <button className='booking-cancel' 
                        type='submit'
                        onClick={() => openModal('Booking Cancel', booking.id)}>
                        Cancel Your Booking
                    </button>
                </div>
            </div>
        </li>
    )
}

export default BookingsItems;

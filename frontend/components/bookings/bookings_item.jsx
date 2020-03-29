import React from 'react';
import { Link } from 'react-router-dom';

const BookingsItems = ({ booking }) => {

    return (
        <li className='booking-li'>
            <Link to={`/bookings/${booking.id}`}>
                <div className='booking-image'>
                    <img src={booking.images[0]} />
                </div>

            </Link>
            <div className='booking-info'>
                <div className='booking-address'>
                    <span>
                        {booking.address}
                    </span>
                    <span className="booking-rating">
                        <img className="rating-star" src={window.rating_star} />
                        {overallRating}
                    </span>
                </div>

                <div className='booking-name'>
                    <span>{booking.name}</span>
                </div>
                <div className='booking-price'>
                    <span>${booking.price}</span> / night
                </div>
            </div>
        </li>
    )
}

export default BookingsItems;

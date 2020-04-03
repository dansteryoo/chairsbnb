import React from 'react';
import BookingsItems from './bookings_item';
import NavSearchLogoutContainer from '../navbar/navsearch_logout_container';

class Bookings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            success: 'Booking has been successful'
        }
    };

    componentDidMount() {
        this.props.fetchBookings();
    };

    render() {

        var { bookings, deleteBooking, openModal } = this.props;

        let renderBookingReservations;
        if (bookings.length === 0 || bookings === undefined) {
            renderBookingReservations = <img src={window.bookings_ph} />
        } else {
            renderBookingReservations = <ul className='bookings-ul'>
                    {   bookings.map(booking => (
                            <BookingsItems
                                booking={booking}
                                deleteBookning={deleteBooking}
                                openModal={openModal}
                                key={booking.id}
                            />
                        ))
                    }
            </ul>
        };

        return (
            <div className='bookings-index-container'>
                <NavSearchLogoutContainer />
                <div className='bookings-body'>
                    <div className='bookings-index-ph-title'>
                        <span>Bookings</span>
                    </div>
                    <div className='bookings-index-header'>
                        <span>Upcoming</span>
                    </div>

                    <div className='bookings-index-ph'>

                        {renderBookingReservations}

                    </div>
                        
                </div>
            </div>
        )
    }

}

export default Bookings;
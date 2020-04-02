import React from 'react';
import BookingsItems from './bookings_item';
import NavSearchLogoutContainer from '../navbar/navsearch_logout_container';
// import { Link } from 'react-router-dom';

class Bookings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            success: this.props.success,
            successMessageClasses: ['reservation-successful-msg-visible']
        }
    };

    componentDidMount() {
        // debugger
        this.props.fetchBookings();
    };

    render() {
        // debugger
        // if (this.props.bookings === undefined) {
        //     return <div></div>
        // };

        // var { bookings, deleteBooking } = this.props;

        // let renderBookingReservations;
        // if (bookings === undefined) {
        //     renderBookingReservations = <img src={window.bookings_ph} />
        // }
        // } else {
        //     renderBookingReservations = <ul className='bookings-ul'>
        //             bookings.map(booking => (
        //                 <BookingsItems
        //                     booking={booking}
        //                     deleteBookning={deleteBooking}
        //                     key={booking.id}
        //                 />
        //             ))
        //     </ul>
        // };

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

                        <img src={window.bookings_ph} />

                    </div>
                        
                </div>
            </div>
        )
    }

}

export default Bookings;
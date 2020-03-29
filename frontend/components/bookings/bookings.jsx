import React from 'react';
import BookingsItems from './bookings_item';
import NavSearchLogoutContainer from '../navbar/navsearch_logout_container';
// import { Link } from 'react-router-dom';

class Bookings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
    
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        this.props.fetchBookings();
    };

    handleSubmit(e) {
        e.preventDefault();
        
        let booking = Object.assign({}, this.state);
        debugger
        this.props.createBooking(booking)
    };

    update(f) {
        return e => this.setState({
            [f]: e.target.value
        })
    };

    renderErrors() {
        if (this.props.errors === undefined) {
            this.props.errors = []
        }
        return (
            <ul className='form-errors'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {

        const { bookings, deleteBooking } = this.props;

        let renderBookingReservations;
        if (bookings === undefined) {
            renderBookingReservations = <div className='bookings-index-ph'>
                <img src={window.bookings_ph} />
            </div>
        } else {
            renderBookingReservations = <ul className='bookings-ul'>
                    bookings.map(booking => (
                        <BookingsItems
                            booking={booking}
                            deleteBookning={deleteBooking}
                            key={booking.id}
                        />
                    ))
            </ul>
        }

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

                        {renderBookingReservations}
                        
                </div>
            </div>
        )
    }

}

export default Bookings;
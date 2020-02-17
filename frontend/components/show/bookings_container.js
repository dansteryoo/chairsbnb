import { connect } from 'react-redux';
import {
    fetchBookings,
    fetchBooking,
    createBooking,
    updateBooking,
    deleteBooking
} from '../../actions/booking_actions';
import Booking from './listing_index';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.users[state.session.id],
    listing: state.listings[ownProps.match.params.listingId],
    booking: Object.values(state.bookings)
});

const mapDispatchToProps = (dispatch) => ({
    fetchBookings: () => dispatch(fetchBookings()),
    fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
    createBooking: (booking) => dispatch(createBooking(booking)),
    updateBooking: (booking) => dispatch(updateBooking(booking)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))

});


export default connect(mapStateToProps, mapDispatchToProps)(Booking);
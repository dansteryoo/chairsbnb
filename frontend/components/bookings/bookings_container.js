import { connect } from 'react-redux';
import { fetchBookings, createBooking, deleteBooking} from '../../actions/booking_actions';
import Booking from './bookings';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
    currentUser: state.users[state.session.id],
    listing: state.listings[ownProps.match.params.listingId],
    booking: Object.values(state.bookings)
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchBookings: () => dispatch(fetchBookings()),
    createBooking: (booking) => dispatch(createBooking(booking)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))

});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
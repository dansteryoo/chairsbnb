import { connect } from 'react-redux';
import { fetchBookings, createBooking, deleteBooking} from '../../actions/booking_actions';
import Booking from './bookings';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.users[state.session.id],
    listing: state.listings[ownProps.match.params.listingId],
    bookings: Object.values(state.bookings),
    errors: state.errors 
});

const mapDispatchToProps = (dispatch) => ({
    fetchBookings: () => dispatch(fetchBookings()),
    createBooking: (booking) => dispatch(createBooking(booking)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
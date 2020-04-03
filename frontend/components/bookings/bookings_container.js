import { connect } from 'react-redux';
import { fetchBookings, createBooking, deleteBooking} from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import Booking from './bookings';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
    currentUser: state.users[state.session.id],
    bookings: Object.values(state.bookings),
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    fetchBookings: () => dispatch(fetchBookings()),
    createBooking: (booking) => dispatch(createBooking(booking)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId)),
    openModal: (formType, id) => dispatch(openModal(formType, id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Booking));
import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { fetchBooking, createBooking, clearErrors } from '../../actions/bookings/booking_actions';
import { openModal } from '../../actions/modal/modal_actions';
import ListingsShow from './listings_show';


const mapStateToProps = (state, ownProps) => ({
    listing: state.listings[ownProps.match.params.listingId],
    bookings: Object.values(state.bookings),
    currentUser: state.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    createBooking: (booking) => dispatch(createBooking(booking)),
    fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
    openModal: () => dispatch(openModal('Log In')),
    clearErrors: () => dispatch(clearErrors()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsShow);

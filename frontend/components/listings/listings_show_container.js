import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { createBooking } from '../../actions/booking_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import ListingShow from './listings_show';
import { withRouter } from 'react-router-dom';
 

const mapStateToProps = (state, ownProps) => ({
    listing: state.listings[ownProps.match.params.listingId],
    bookings: Object.values(state.bookings),
    currentUser: state.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    createBooking: (booking) => dispatch(createBooking(booking)),
    closeModal: () => dispatch(closeModal()),
    openModal: (formType) => dispatch(openModal(formType)),
    clearErrors: () => dispatch(clearErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingShow));
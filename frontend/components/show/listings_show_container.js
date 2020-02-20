import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { fetchBooking, createBooking } from '../../actions/booking_actions';
import ListingShow from './listings_show';
 

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        listing: state.listings[ownProps.match.params.listingId],
        bookings: Object.values(state.bookings),
        currentUser: state.users[state.session.id]
    }

};

const mapDispatchToProps = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    createBooking: (booking) => dispatch(createBooking(booking)),
    fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId))

});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);

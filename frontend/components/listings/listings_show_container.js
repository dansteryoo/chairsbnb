import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listings_show';
import { withRouter } from 'react-router-dom';
 

const mapStateToProps = (state, ownProps) => {
    return {
        listing: state.listings[ownProps.match.params.listingId],
        bookings: Object.values(state.bookings),
        currentUser: state.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingShow));
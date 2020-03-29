import { connect } from 'react-redux';
import { fetchListings, fetchListing } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';
import SearchIndex from './search_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
    listings: Object.values(state.listings),
    currentUser: state.users[state.session.id]
});


const mapDispatchToProps = (dispatch) => ({
    fetchListings: () => dispatch(fetchListings()),
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    openModal: (formType) => dispatch(openModal(formType)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))

});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex));
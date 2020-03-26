import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import SearchIndex from './search_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
    listings: Object.values(state.listings)
});


const mapDispatchToProps = (dispatch) => ({
    fetchListings: () => dispatch(fetchListings()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex));
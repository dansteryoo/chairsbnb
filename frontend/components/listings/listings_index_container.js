import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import ListingsIndex from './listings_index';


const mapStateToProps = (state) => ({
    listings: Object.values(state.listings)
});


const mapDispatchToProps = (dispatch) => ({
    fetchListings: () => dispatch(fetchListings())  
});
    

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import ListingsIndex from '../show/listings_index';


const mapStateToProps = (state) => ({
    listings: Object.values(state.listings)
});


const mapDispatchToProps = (dispatch) => ({
    fetchListings: () => dispatch(fetchListings())  
});
    

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);


// // MyFormComponent#formSubmissionHandler
// const { name, photos } = this.state;
// const formData = new FormData();

// formData.append("post[name]", name);

// for (let i = 0; i < photos.length; i++) {
//     formData.append("post[photos][]", photos[i]);
// }

// this.props.myThunkActionCreator(formData);
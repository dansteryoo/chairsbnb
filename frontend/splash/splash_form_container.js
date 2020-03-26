import { connect } from 'react-redux';
import { clearErrors } from '../actions/session_actions';
import { fetchSearchResult } from '../actions/listing_actions';
import SplashForm from './splash_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    currentUser: state.users[state.session.id],
    errors: state.errors
});


const mapDispatchToProps = (dispatch) => ({
    clearErrors: () => dispatch(clearErrors()),
    fetchSearchResult: searchKeywords => dispatch(fetchSearchResult(searchKeywords)),
    

});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashForm));


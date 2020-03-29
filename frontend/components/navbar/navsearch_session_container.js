import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchSearchResult, fetchListings } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';
import NavSearchSession from './navsearch_session'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    listings: Object.values(state.listings)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: (formType) => dispatch(openModal(formType)),
    fetchSearchResult: (searchKeywords) => dispatch(fetchSearchResult(searchKeywords)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSearchSession));

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchSearchResult } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';
import NavSearchLogout from './navsearch_logout'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    currentUser: state.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: (formType) => dispatch(openModal(formType)),
    fetchSearchResult: searchKeywords => dispatch(fetchSearchResult(searchKeywords)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSearchLogout));

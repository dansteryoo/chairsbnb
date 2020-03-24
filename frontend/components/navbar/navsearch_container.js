import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavSearch from './navsearch'
import { withRouter } from 'react-router-dom';
import { fetchSearchResult } from '../../actions/listing_actions'

const mapStateToProps = (state) => ({
    currentUser: state.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchSearchResult: searchTerm => dispatch(fetchSearchResult(searchTerm))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSearch));

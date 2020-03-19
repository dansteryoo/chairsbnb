import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavSearch from './navsearch'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    currentUser: state.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSearch));
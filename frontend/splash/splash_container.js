import { connect } from 'react-redux';
import { login, logout } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import Splash from './splash';

const mapStateToProps = ({ session, users }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    openModal: (formType) => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);


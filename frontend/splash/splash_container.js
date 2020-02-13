import { connect } from 'react-redux';
import { login, logout } from '../actions/sessions_action';
import { openModal } from '../actions/modal_action';
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

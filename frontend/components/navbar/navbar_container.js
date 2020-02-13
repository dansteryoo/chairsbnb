import { connect } from 'react-redux';
import { logout } from '../../actions/sessions_action';
import { openModal } from '../../actions/modal_action';
import Navbar from './navbar';


const mapStateToProps = ({ session, users }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: (formType) => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

import { connect } from 'react-redux';
import { logout } from '../../actions/sessions_action';
import Navbar from './navbar';


const mapStateToProps = ({ session, users }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

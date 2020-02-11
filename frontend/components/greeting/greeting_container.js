import { connect } from 'react-redux';
import { logout } from '../../actions/sessions_action';
import Greeting from './greeting';

const mapStateToProps = ({ session, users }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

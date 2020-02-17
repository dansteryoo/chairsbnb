import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Temp from './temp';


// const mapStateToProps = (state) => ({
//     currentUser: state.users[state.session.id]
// });

const mapStateToProps = ({ session, users }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Temp);

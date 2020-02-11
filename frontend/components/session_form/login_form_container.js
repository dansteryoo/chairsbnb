import { connect } from 'react-redux';
import { login } from '../../actions/sessions_action';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    contentForm: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        imageUrl: ''
    }, 
    formType: 'Log In',
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

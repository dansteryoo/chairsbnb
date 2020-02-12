import { connect } from 'react-redux';
import { signup } from '../../actions/sessions_action';
import SignUpForm from './signup_form';


const mapStateToProps = (state) => ({
    contentForm: {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    },
    formType: 'Sign Up',
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

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
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (formType) => dispatch(openModal(formType)),
    switchForm: (
        <button onClick={() => dispatch(openModal('Sign Up'))}>
            Sign up
         </button>
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

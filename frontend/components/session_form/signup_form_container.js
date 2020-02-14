import { connect } from 'react-redux';
import { signup } from '../../actions/sessions_action';
import { closeModal, openModal } from '../../actions/modal_action';
import SignUpForm from './signup_form';


const mapStateToProps = (state) => ({
    contentForm: {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    },
    formType: 'Sign Up',
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (formType) => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

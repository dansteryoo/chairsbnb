import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import SignUpForm from './signup_form';


const mapStateToProps = (state) => ({
    formType: 'Sign Up',
    errors: state.errors 
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (formType) => dispatch(openModal(formType)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
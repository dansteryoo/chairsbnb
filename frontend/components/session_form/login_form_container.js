import { connect } from 'react-redux';
import { login, logindemo, clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import LogInForm from './login_form';

const mapStateToProps = (state) => ({ 
    formType: 'Log In',
    errors: state.errors
});


const mapDispatchToProps = (dispatch) => ({
    logindemo: () => dispatch(logindemo()),
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (formType) => dispatch(openModal(formType)), 
    clearErrors: () => dispatch(clearErrors()),
});


export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);


import { connect } from 'react-redux';
import { login, logindemo } from '../../actions/sessions_action';
import { closeModal, openModal } from '../../actions/modal_action';
import LogInForm from './login_form';

const mapStateToProps = (state) => ({
    contentForm: {
        email: '',
        password: ''
    }, 
    formType: 'Log In',
    errors: state.errors
});


const mapDispatchToProps = (dispatch) => ({
    logindemo: () => dispatch(logindemo()),
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (formType) => dispatch(openModal(formType))
});


export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);


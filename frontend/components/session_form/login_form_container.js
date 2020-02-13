import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/sessions_action';
import { closeModal, openModal } from '../../actions/modal_action';
import LogInForm from './login_form';

const mapStateToProps = (state) => ({
    contentForm: {
        username: '',
        password: ''
    }, 
    formType: 'Log In',
    errors: state.errors
});


const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
        <button onClick={() => dispatch(openModal('Sign Up'))}>
            Sign Up
        </button>
    )
});


export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);


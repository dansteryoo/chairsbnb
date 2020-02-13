import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/sessions_action';
import { closeModal, openModal } from '../../actions/modal_action';
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
    otherForm: (
        <button onClick={() => dispatch(openModal('Log In'))}>
            Log In
         </button>
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

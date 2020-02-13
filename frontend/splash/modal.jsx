import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_action';
import LogInFormContainer from '../components/session_form/login_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';


const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;

    let component;
    switch (modal) {
        case 'Log In':
            component = <LogInFormContainer />;
            break;
        case 'Sign Up':
            component = <SignUpFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-closing-x" onClick={closeModal}>&#10005;</div>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(Modal);

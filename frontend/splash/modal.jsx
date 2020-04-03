import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LogInFormContainer from '../components/session_form/login_form_container';
import BookingCancelContainer from '../components/bookings/booking_cancel_container';


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
        case 'Booking Cancel':
            component = <BookingCancelContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {

    let modalVar;
    if(!state.modal) {
        modalVar = null
    } else {
        modalVar = state.modal.formType
    }
    let idVar;
    if (!state.modal) {
        idVar = null
    } else {
        idVar = state.modal.bookingId
    }

    return {
        modal: modalVar,
        bookingId: idVar
    }
};

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(Modal);

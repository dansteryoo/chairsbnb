import { connect } from 'react-redux';
import { deleteBooking } from '../../actions/booking_actions';
import { closeModal } from '../../actions/modal_actions';
import BookingCancel from './booking_cancel'
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    currentUser: state.users[state.session.id],
    bookingId: state.modal.bookingId,
    errors: state.errors
});
 
const mapDispatchToProps = dispatch => ({
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingCancel));
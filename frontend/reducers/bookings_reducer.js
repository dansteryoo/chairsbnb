import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING} from '../actions/booking_actions';


const bookingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_BOOKINGS:
            // debugger
            return action.bookings;

        case RECEIVE_BOOKING:
            newState[action.booking.id] = action.booking
            return newState;

        case REMOVE_BOOKING:
            delete newState[action.bookingId]
            return newState;

        default:
            return oldState;
    }
};

export default bookingsReducer;
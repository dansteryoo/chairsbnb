import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';


export const receiveBookings = (bookings) => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

export const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
});

export const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING,
    bookingId
});


export const fetchBookings = () => dispatch => (
    APIUtil.fetchBookings()
        .then(bookings => dispatch(receiveBookings(bookings))
    )
);

export const fetchBooking = (bookingId) => dispatch => (
    APIUtil.fetchBooking(bookingId)
        .then(booking => dispatch(receiveBooking(booking))
    )
);

export const createBooking = (booking) => dispatch => (
    APIUtil.createBooking(booking)
        .then(booking => dispatch(receiveBooking(booking))
    )
);

export const updateBooking = (booking) => dispatch => (
    APIUtil.updateBooking(booking)
        .then(booking => dispatch(receiveBooking(booking))
    )
);

export const deleteBooking = (bookingId) => dispatch => (
    APIUtil.deleteBooking(bookingId)
        .then(() => dispatch(removeBooking(bookingId))
    )
);
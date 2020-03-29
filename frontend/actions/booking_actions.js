import * as BookingsAPIUtil from '../util/bookings_api_util';

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
    BookingsAPIUtil.fetchBookings()
        .then(bookings => dispatch(receiveBookings(bookings))
    )
);

export const fetchBooking = (bookingId) => dispatch => (
    BookingsAPIUtil.fetchBooking(bookingId)
        .then(booking => dispatch(receiveBooking(booking))
    )
);

export const createBooking = (booking) => dispatch => (
    BookingsAPIUtil.createBooking(booking)
        .then(booking => dispatch(receiveBooking(booking))
    )
);

export const deleteBooking = (bookingId) => dispatch => (
    BookingsAPIUtil.deleteBooking(bookingId)
        .then(() => dispatch(removeBooking(bookingId))
    )
);
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

export const fetchBooking = (listingId) => dispatch => (
    APIUtil.fetchBooking(listingId)
        .then(listing => dispatch(receiveListing(listing))
        )
);

export const createBooking = (listingId) => dispatch => (
    APIUtil.createBooking(listingId)
        .then(listing => dispatch(receiveListing(listing))
        )
);

export const updateBooking = (listingId) => dispatch => (
    APIUtil.updateBooking(listingId)
        .then(listing => dispatch(receiveListing(listing))
        )
);

export const deleteBooking = (listingId) => dispatch => (
    APIUtil.deleteBooking(listingId)
        .then(listing => dispatch(receiveListing(listing))
        )
);
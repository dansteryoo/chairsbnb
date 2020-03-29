

export const fetchBookings = () => (
    $.ajax({
        url: `/api/bookings`,
        method: 'GET'
    })
);

export const fetchBooking = (bookingId) => (
    $.ajax({
        url: `/api/bookings/${bookingId}`,
        method: 'GET'
    })
);

export const createBooking = (booking) => (
    $.ajax({
        url: `api/bookings/`,
        method: 'POST',
        data: { booking }
    })
);

export const deleteBooking = (bookingId) => (
    $.ajax({
        url: `api/bookings/${bookingId}`,
        method: 'DELETE'
    })
);

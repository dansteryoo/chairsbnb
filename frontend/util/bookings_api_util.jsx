

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

export const updateBooking = (booking) => (
    $.ajax({
        url: `api/bookings/${booking.id}`,
        method: 'PATCH',
        data: { booking }
    })
);

export const updateBooking = (bookingId) => (
    $.ajax({
        url: `api/bookings/${bookingId}`,
        method: 'DELETE'
    })
);

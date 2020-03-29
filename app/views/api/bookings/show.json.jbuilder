json.partial! "/api/bookings/booking", booking: @booking
    json.bookingIds @user.bookings.map { |booking| booking.id }
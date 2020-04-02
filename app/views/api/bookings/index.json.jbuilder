@bookings.each do |booking|
    json.set! booking.id do
        json.partial! "api/bookings/booking", booking: booking
        json.dates booking.dates
        json.location booking.listing.address
        json.images booking.listing.images[0]
    end
end
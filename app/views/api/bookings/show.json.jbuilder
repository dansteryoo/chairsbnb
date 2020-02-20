json.set! booking.id do
    json.partial! "/api/bookings/booking", booking: @booking
        json.dates booking.dates
        json.locations booking.listing.address
        json.images booking.listing.images.map { |image| url_for(image) }
end
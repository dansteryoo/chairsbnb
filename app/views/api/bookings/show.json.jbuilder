json.set! booking.id do
    json.partial! "/api/bookings/booking", booking: @booking
        json.dates booking.dates
        json.locations booking.listing.address
        json.photos booking.listing.photos.map { |photo| url_for(photo) }
end
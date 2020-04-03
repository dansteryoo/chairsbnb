json.partial! "api/bookings/booking", booking: @booking
    json.dates @booking.dates
    json.location @booking.listing.address
    json.name @booking.listing.name
    json.images @booking.listing.images.map { |image| url_for(image) }
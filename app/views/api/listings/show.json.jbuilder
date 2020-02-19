json.set! listing.id do
    json.partial! '/api/listings/listing', listing: listing
        json.bookings listing.bookings.map { |booking| booking.id }
        json.reviews listing.reviews.map { |review| review.id }
        json.photos listing.photos.map { |photo| url_for(photo) }
end
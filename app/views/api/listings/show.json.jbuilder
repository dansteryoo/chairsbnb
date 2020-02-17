json.listing do
    json.partial! '/api/listings/listing', listing: listing
        json.bookings listing.bookings.map { |booking| booking.id }
        json.reviews listing.reviews.map { |review| review.id }
        json.imagesUrl listing.images.map { |image| url_for(image) }
end
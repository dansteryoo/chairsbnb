@listings.each do |listing|
  json.set! listing.id do
    json.partial! '/api/listings/listing', listing: listing
        json.bookings listing.bookings.map { |booking| booking.id }
        json.reviews listing.reviews.map { |review| review.id }
        # json.images listing.images.map { |image| url_for(image) }
  end
end
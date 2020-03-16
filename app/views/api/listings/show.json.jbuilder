json.partial! '/api/listings/listing', listing: @listing
  json.bookings @listing.bookings.map { |booking| booking.id }
    json.reviews @listing.reviews.map { |review| review }
    json.images @listing.images.map { |image| url_for(image) }
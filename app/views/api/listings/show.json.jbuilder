json.partial! '/api/listings/listing', listing: @listing
  json.bookings @listing.bookings.map { |booking| booking }
    json.reviews @listing.reviews do |review| 
      json.review review 
      json.author review.author
    end
    json.images @listing.images.map { |image| url_for(image) }
@listings.each do |listing|
  json.set! listing.id do
    json.partial! '/api/listings/listing', listing: listing
        json.reviews listing.reviews.map { |review| review }
        json.authors listing.reviews.map { |review| review.author }
        json.images listing.images.map { |image| url_for(image) }
  end
end
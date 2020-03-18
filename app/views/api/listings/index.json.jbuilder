@listings.each do |listing|
  json.set! listing.id do
    json.partial! '/api/listings/listing', listing: listing
    json.reviews listing.reviews do |review| 
      json.review review 
      json.author review.author
    end
      json.images listing.images.map { |image| url_for(image) }
  end
end
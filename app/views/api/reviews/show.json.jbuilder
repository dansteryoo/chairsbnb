json.reviews do 
    @listing.reviews.each do |review|
        json.set! review.id do 
        json.partial! "api/reviews/review", review: review
        json.partial! "api/users/user", user: review.author
    end
  end
end
class Review < ApplicationRecord

    validates :listing_id, :author_id, presence: true
    validates :overall_rating, presence: true, inclusion: { in: (1..5) }

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listings_id,
        class_name: :Listing

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

end

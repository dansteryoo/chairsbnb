class Booking < ApplicationRecord
    validates :listing_id, :guest_id, :start_date, :end_date, presence: true 
    validate :does_not_overlap_approved_request


    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing
  
    belongs_to :guest,
        primary_key: :id,
        foreign_key: :guest_id,
        class_name: :User

    def dates
        (start_date..end_date).to_a
    end

    def in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("long > ?", bounds[:southWest][:long])
            .where("long < ?", bounds[:northEast][:long])
    end

    def available_booking(bounds, dates)
        overlap = self
            .where.not(id: self.id)
            .where(listing_id: self.listing_id)
            .where('start_date BETWEEN :start_date AND :end_date
                OR end_date BETWEEN :start_date AND :end_date', 
                dates[:start_date], dates[:end_date])

        self.in_bounds(bounds).where.not(id: overlap)
    end  

end

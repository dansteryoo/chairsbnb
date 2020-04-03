class Booking < ApplicationRecord
    validates :listing_id, :guest_id, :start_date, :end_date, presence: true 
    validate :does_not_overlap
    
    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing
  
    belongs_to :guest,
        primary_key: :id,
        foreign_key: :guest_id,
        class_name: :User


    def overlapping_request
        Booking
            .where.not(id: self.id)
            .where(listing_id: self.listing_id)
            .where('start_date BETWEEN :start_date AND :end_date
                OR end_date BETWEEN :start_date AND :end_date', 
                start_date: start_date, 
                end_date: end_date)
    end

    def does_not_overlap
        if !overlapping_request
            return true 
        end
        return false
    end

    def dates
        (self.start_date..self.end_date).to_a
    end

end

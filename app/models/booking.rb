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

    def available_booking?
        if self.start_date && self.end_date
        
        booking_request = Booking
            .where(listing_id: self.listing_id)
            .where.not('end_date <= ? OR start_date >= ?', self.start_date, self.end_date)
        
            return true if booking_request.empty?
        end

        return false
    end

end

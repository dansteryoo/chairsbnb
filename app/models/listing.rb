class Listing < ApplicationRecord

    validates :name, :description, :host_id, :address, :lat, :long, :price, presence: true

    
    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    has_many :bookings,
        primary_key: :id,
        foreign_key: :guest_id,
        class_name: :Booking

    has_many :reviews,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Review

    has_many_attached :images


    def self.search_by_keywords(keywords)
        match = '%#{keywords}%'
        
        search_result = Listing.where('name ILIKE ?', match)
            .or(Listing.where('address ILIKE ?', match)
            .or(Listing.where('description ILIKE ?', match))).includes(:bookings)

        search_result
    end

    def self.search_by_dates(search_result, start_date, end_date)
        start_date = Date.parse(start_date)
        end_date = Date.parse(end_date)
        search_dates = (start_date..end_date).to_a

        result = []
        
        search_result.each do |listing|
            booked_dates = []
            listing.bookings.each do |booking|
                booked_dates += booking.dates
            end

            available_dates = true
            search_dates.each do |date|
                if booked_dates.include?(date)
                    available_dates = false
                end
            end

            if available_dates
                result << listing
            end
        end

        result
    end

    def average_rating
        rating = 0
        if self.reviews.length > 0
            self.reviews.inject { 
                |sum, review| sum + review.average_rating
                } / self.reviews.count * 1.0
        end

        rating
    end

   
end


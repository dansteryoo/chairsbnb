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
        foreign_key: :listing_id,
        class_name: :Review

    has_many_attached :images

    def in_bounds(bounds)
        bounds = bounds.values
            if self.lat.between?(
                bounds[1]['lat'].to_f, 
                bounds[0]['lat'].to_f) && self.long.between?(
                    bounds[1]['long'].to_f, bounds[0]['long'].to_f)
            
                return true 
            end

        return false
    end
   

    def self.search_by_keywords(keywords)
        keyword = `%#{keywords}%`

        search_result = Listing.where("name LIKE ?", keyword)
            .or(Listing.where("description LIKE ?", keyword))
            .or(Listing.where("address LIKE ?", keyword))
            .includes(:bookings)
            
        search_result
    end

    def self.search_by_dates(search_result, start_date, end_date)
        search_start = Date.parse(start_date)
        search_end = Date.parse(end_date)
        search_dates = (search_start..search_end).to_a

        result = []
        
        search_result.each do |listing|
            booked_dates = []
            listing.bookings.each do |booking|
                booked_dates += booking.dates
            end

            inclusion_flag = true
            search_dates.each do |date|
                if booked_dates.include?(date)
                    inclusion_flag = false
                end
            end
            if inclusion_flag
                result << listing
            end
        end

        result
    end

end


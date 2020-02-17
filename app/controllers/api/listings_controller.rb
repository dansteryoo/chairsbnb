class Api::ListingsController < ApplicationController
    
    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    def search
        search_result = Listing.search_by_keywords(params[:keywords])

        if params[:start_date] && params[:end_date] && (params[:start_date] != "") && (params[:end_date] != "")
            start_date = params[:start_date]
            end_date = params[:end_date]
            @listings = Listing.search_by_dates(search_result, start_date, end_date)
        else
            @listings = result
        end

        render :index
    end

    def create
    end
    
private

    def listing_params
        params.require(:listing).permit(:id, :name, :description, :host_id, :address, :lat, :long, :price, images: [])
    end

    def bounds
        params[:bounds]
    end

end
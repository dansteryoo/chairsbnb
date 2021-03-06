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
        search_result = Listing.search_by_keywords(params[:search_keywords])
    
        if params[:start_date] && params[:end_date] && (params[:start_date] != "") && (params[:end_date] != "")
            start_date = params[:start_date]
            end_date = params[:end_date]
            @listings = Listing.search_by_dates(search_result, start_date, end_date)
        else
            @listings = search_result
        end
        
        render :index
    end

    def create
        @listing = Listing.new(listing_params)

        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 400
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
       
        if @listing.delete
            render :show
        else
            render json: ['Unable to delete listing.'], status: 400
        end
    end
    
private

    def listing_params
        params.require(:listing).permit(:name, :description, :host_id, :address, :lat, :long, :price, :search_keywords, :start_date, :end_date, images: [])
    end

end
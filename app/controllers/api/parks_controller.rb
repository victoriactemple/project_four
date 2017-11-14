class Api::ParksController < ApplicationController

    def index
        @parks = Park.all
        render json: @parks
    end        

    def show
    park_id = params[:id]

    @park = Park.find_by_id(park_id)
    @trails = @park.trails
    render json: {
       park: @park,
       trails: @trails 
    }
    
    end



    private 

    def park_params
        params.require(:park).permit(:name, :description, :image, :address, :lon, :lat)
    end


end

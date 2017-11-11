class Api::ParksController < ApplicationController

    def index
        @parks = Park.all
        render json: @parks
    end        

    def show
    park_id = params[:id]

    @park = Park.find_by_id(park_id)
    render json: @park
    end


end

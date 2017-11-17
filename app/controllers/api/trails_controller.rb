class Api::TrailsController < ApplicationController

def index
    @trails = Trail.all
    render json: @trails
end

def show
@park = Park.find(params[:park_id])
trail_id = params[:id]
@trail = @park.trails.find(trail_id)
render json: @trail, include: [:trail_comments]

end


def create
    @park = Park.find(params[:park_id])
    @trail = @park.trails.create(trail_params)
 
   render json: @trail

end

def update
    @trail = Trail.find(params[:id])
    @trail.update!(trail_params)

    render json: @trail

end


def destroy
    @park = Park.find(params[:park_id])
    @trail = @park.trails.find(params[:id]) # .delete(Trail.find(params[:id]))
    @trail.destroy

    render json: @park
end


private 

def trail_params
    params.require(:trail).permit(:name, :distance, :image, :description, :difficulty, :pet_friendly)
end

end


#     @trail = Trail.find(params[:id]).destroy
# @trails = Park.find(params[:park_id]).trails
# render json: @trails
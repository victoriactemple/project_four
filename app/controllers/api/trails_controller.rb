class Api::TrailsController < ApplicationController

def index
    @trails = Trail.all
    render json: @trails
end

def show
@trails = Trail.find(params[:id])
render json: @trail, include: [:trail_comments]

end



end

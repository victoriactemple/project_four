class Api::TrailsController < ApplicationController

def index
    @trails = Trail.all
    render json: @trails
end

def show
trail_id = params[:id]
@trails = Trail.find_by_id(trail_id)
render json: @trail, include: [:trail_comments]

end



end

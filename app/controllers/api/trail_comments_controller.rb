class Api::TrailCommentsController < ApplicationController

    def index
    
    @trail_comments = TrailComment.all

    render json: @trail_comments

    end

    def show
        @park = Park.find(params[:park_id])
        @trail = Trail.find(params[:trail_id])
        trail_comment_id = params[:id]
        @trail_comments = @trail.trail_comments.find(trail_comment_id)

        render json: @trail_comments

    end
end

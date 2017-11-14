class Api::TrailCommentsController < ApplicationController

    def index
    
    @trail_comments = TrailComment.all

    render json: @trail_comments

    end

    def show
        @park = Park.find(params[:park_id])
        @trail = Trail.find(params[:trail_id])
        trail_comment_id = params[:id]
        @trail_comment = @trail.trail_comments.find(trail_comment_id)

        render json: @trail_comment

    end

    def create
        @park = Park.find(params[:park_id])
        @trail = Trail.find(params[:trail_id])
        @trail_comment = @trail.trail_comments.create!(trail_comment_params)

        render json: @trail_comment

    end


    private

    def trail_comment_params
        params.require(:trail_comment).permit(:title, :content)
    end


end

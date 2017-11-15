class Api::TrailCommentsController < ApplicationController
    before_action :authenticate_user!, :except => [:index]

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

    # def create
    #     @park = Park.find(params[:park_id])
    #     @trail = Trail.find(params[:trail_id])
    #     @trail_comment = @trail.trail_comments.create!(trail_comment_params)

    #     render json: @trail_comment

    # end

    def create
        @user = current_user
        # @park = Park.find(params[:park_id])
        # @trail = Trail.find(params[:trail_id])
        @trail_comment = @user.trail_comments.create!(trail_comment_params)

        # @trail.user = @user

        render json: @trail_comment


    end

    def destroy
        @user = current_user
        @trail_comment = TrailComment.find(params[:id]).delete
        render status: :ok
    end



    private

    def trail_comment_params
        params.require(:trail_comment).permit(:title, :content, :trail_id)
    end


end

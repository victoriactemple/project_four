class Api::CommentsController < ApplicationController
    before_action :authenticate_user!
    load_and_authorize_resource only: [:update, :destroy]

    def index
        @users = User.joins(:comments).includes(:comments).all


        @comments = Comment.all

        render json: @comments

    end

    def show
        @comment = Comment.find(params[:id])

        render json: @comment

    end

    def create

        @user = current_user
        @comment = @user.comments.build(comment_params)

        if @user.save
           render json: @comment
        
        # status: :created, location: @comment
        # else
        #     render json: @comment.errors, status: :unprocessable_entity
        end
        
    end
   

    def destroy
        @user = current_user
        @comment = Comment.find(params[:id]).delete
    
        render status: :ok

    end

    private 
    def comment_params 
        params.require(:comment).permit(:title, :content)
    end


end

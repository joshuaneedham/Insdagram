class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.save
    render :show
  end

  def comment_params
    params.require(:post).permit(:caption, :image)
  end
end

class Api::PostsController < ApplicationController

  def index
    @posts = Post.all;
    render :index
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @post.save
    render :show
  end

  def like
    @post = Post.find(params[:id])
    @like = @post.likes.create!(user_id: current_user.id)
    render :show
  end

  def unlike
    @post = post.find(params[:id])
    like = Like.find_by(user_id: current_user.id, post_id: post.id])
    # add destroy
    render :show
  end

  def post_params
    params.require(:post).permit(:caption, :image)
  end

  # def like_params
  #   params.require(:like).permit(:post_id)
  # end
end

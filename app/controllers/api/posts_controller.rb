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
    @post.create!
    render :show
  end

  def post_params
    params.require(:post).permit(:caption, :image)
  end
end

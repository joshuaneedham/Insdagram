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
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    @like.save
  end

  def post_params
    params.require(:post).permit(:caption, :image)
  end

  def like_params
    params.require(:like).permit(:post_id)
  end
end

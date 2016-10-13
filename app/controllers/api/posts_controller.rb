class Api::PostsController < ApplicationController

  def index
    # Post.where("posts.user_id = ? OR posts.user_id IN ")
    # current_user.following_posts.pluck(:user_id).uniq
    # posts_following = current_user.following_posts;

    @posts = current_user.feed_posts
    render :index
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show
    else
      render ({ json: @post.errors.full_messages, status: 422 })
    end
  end

  def like
    @post = Post.find(params[:id])
    like = @post.likes.new(user_id: current_user.id)
    if like.save
      render :show
    else
      render({ json: ["cannot like post twice"], status: 422 })
    end
  end

  def unlike
    @post = Post.find(params[:id])
    like = Like.find_by(user_id: current_user.id, post_id: @post.id)
    if like.destroy
      render :show
    else
      render ({ json: ["cannot unlike post twice"], status: 422 })
    end
  end

  def post_params
    params.require(:post).permit(:caption, :image)
  end
end

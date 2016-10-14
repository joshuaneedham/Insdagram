class Api::UsersController < ApplicationController
  def index
    @users = User.search( params[:username] )
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def follow
    @user = User.find(params[:id])
    follow = Follow.new(follower_id: current_user.id, followed_id: @user.id)
    # follow = @user.following_user.new(follower_id: current_user.id)

    if follow.save
      render :show
    else
      render({ json: ["user already followed"], status: 422 })
    end
  end

  def unfollow
    @user = User.find(params[:id])
    follow = Follow.find_by(followed_id: current_user.id, followed_id: @user.id)
    if follow.destroy
      render :show
    else
      render({ json: ["user already unfollowed"], status: 422 })
    end
  end

  def search
  end

  def user_params
    params.require(:user).permit(:username, :full_name, :password)
  end
end

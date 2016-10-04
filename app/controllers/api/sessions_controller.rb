class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid username or password"], status: 422
    end
  end

  def destroy
    if current_user
      sign_out
      render json: {}
    else render json: ['no current user to log out'], status: 404
    end
  end
end

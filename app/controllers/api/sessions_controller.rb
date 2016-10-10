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
    sign_out if current_user
    render json: {}
  end
end

class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      sign_in(user)
      redirect_to api_user_url(user)
    else
      render json: [user.errors.full_messages], status: 422
      render :new
    end
  end

  def destroy
    if current_user
      sign_out
      render json: {}
    else
      render json: ["error"], status: 404
    end
  end
end

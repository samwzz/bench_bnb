class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      redirect_to user_url(user)
    else
      render json: [user.errors.full_messages], status: 422
      render :new
    end
  end

  def destroy
    if current_user
      current_user.sign_out
      render {}
    else
      render json: status: 404
    end
  end
end

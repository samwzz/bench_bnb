class Api::UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def show
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end

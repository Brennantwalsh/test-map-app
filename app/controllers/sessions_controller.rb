class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:success] = 'Let your journey begin!'
      redirect_to "/users/#{current_user.id}"
    else
      flash[:warning] = 'Incorrect username or password'
      redirect_to '/login'
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = 'Rest assured. Your journey will be waiting for you.'
    redirect_to '/login'
  end
end

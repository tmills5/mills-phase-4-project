class SessionsController < ApplicationController
  def login
    user = User.find_by!(name:params[:username])
    if user&.authenticate(params[:password])
        byebug
        render json: {user: "Welocome to TrailHead!!"}, status: :ok 
    else 
        render json: {error: "Invalid Username or Password"}, status: :unprocessable_entity
    end 
    
  end

  def destroy
    session.delete :user_id
    render json: { user: "Logged out" }, status: :ok
    byebug
  end


end
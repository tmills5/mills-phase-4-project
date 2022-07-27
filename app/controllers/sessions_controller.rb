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
    head :no_content
  end


end
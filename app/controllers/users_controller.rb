class UsersController < ApplicationController
  
  before_action :find_user, only: [:show]
  
  def show
  end
  
  private
    def find_user
      @user = User.find_by_username(params[:id].downcase)
    end
end

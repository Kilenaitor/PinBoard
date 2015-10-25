class CommentsController < ApplicationController
  
  before_action :find_pin
  
  def create
    @comment = @pin.comments.create!(comment_params)
    current_user.comments << @comment
    
    redirect_to @pin
  end
  
  private  
    def comment_params
      params.require(:comment).permit(:body, :user_id, :pin_id)
    end
    
    def find_pin
      @pin = Pin.find(params[:pin_id])
    end
end
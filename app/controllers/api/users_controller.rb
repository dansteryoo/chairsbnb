 class Api::UsersController < ApplicationController

    before_action :require_logged_in!, only: [:index, :show]

    def index
        @user = User.all
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
    end


private
    
    def user_params
        params.require(:user).permit(:password, :email, :first_name, :last_name)
    end

end

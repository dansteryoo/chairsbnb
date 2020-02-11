class Api::UsersController < ApplicationController

    before_action :require_logged_in!, only: [:index, :show]

    def index
        @user = User.all
        render "api/users/index"
    end

    def show
        @user = User.find(params[:id])
        render "api/users/show"
    end

    def create
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            render "api/users/show"
        else
            flash.now[:errors] = @user.errors.full_messages
        end
    end

    def destroy
    end


private
    
    def user_params
        params.require(:user).permit(:password, :username, :first_name, :last_name)
    end

end

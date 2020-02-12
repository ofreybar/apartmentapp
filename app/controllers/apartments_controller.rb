class ApartmentsController < ApplicationController
    def index
        if user_signed_in?
            apartments = Apartment.where(current_user.id == :user_id)
        else 
            apartments = Apartment.all
        end 
        render json: apartments, status: 200 
    end

    def create
        apartment = Apartment.new(apartment_params)
        if apartment.save
            render json: apartment
        else 
            render json: apartment.errors, status: 422
        end
    end

    def show
    end

    def update
    end

    def destroy
    end

    def apartment_params
        params.require(:apartment).permit(:street, :city, :postal, :country, :price, :manager_name, :manager_phone, :contact_hours, :description, :user_id)
    end

end

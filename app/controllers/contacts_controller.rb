# frozen_string_literal: true

class ContactsController < ApplicationController
  def index
    render json: Contact.all
  end

  def show
    contact = Contact.find(params[:id])

    render json: contact
  end

  def create
    contact = Contact.new(contact_params)

    if contact.save
      render json: contact, status: :created
    else
      render json: { errors: contact.errors }, status: :bad_request
    end
  end

  def update
    contact = Contact.find(params[:id])

    if contact.update(contact_params)
      render json: contact
    else
      render json: { errors: contact.errors }, status: :bad_request
    end
  end

  def destroy
    Contact.find(params[:id]).destroy

    render json: {}
  end

  private

  def contact_params
    params.permit(:first_name, :last_name, :email, :phone_number)
  end
end
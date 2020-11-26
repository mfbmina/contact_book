# frozen_string_literal: true

class HistoriesController < ApplicationController
  def index
    render json: History.where(contact_id: params[:contact_id])
  end
end

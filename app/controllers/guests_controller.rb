class GuestsController < ApplicationController
  def home
    @contact = Contact.new
  end
end
require 'rails_helper'

RSpec.describe "Contacts", type: :request do
  describe "GET /contacts" do
    describe 'when not logged in' do
      it 'redirects to login page' do
        get contacts_path
        expect(response).to have_http_status(302)
        expect(response).to redirect_to('/users/sign_in')
      end
    end
  end
end

require 'rails_helper'

describe 'visiting the home page' do
  it 'allows the user to add themselves as a contact', js: true do
    visit '/'

    expect(page).to have_content('Want to sign up for class updates? Add your info here!')

    within('#contact-form-card') do
      click_on 'Add me to the contact list!'

      expect(page).to have_content('Name can\'t be blank')

      fill_in 'Name', with: 'Mister Rogers'
      fill_in 'Email', with: 'wontyoubemyfriend@gmail.com'
      fill_in 'Telephone', with: '123-456-8912'
      fill_in 'Mailing address', with: 'Mister Rogers\' Neighborhood'
    end
  end
end
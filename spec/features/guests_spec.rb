require 'rails_helper'

describe 'visiting the home page' do
  it 'allows the user to add themselves as a contact', js: true do
    visit '/'

    expect(page).to have_content('Add your info for class updates!')

    within('#add-contact-form') do
      click_on 'Add Contact info'

      expect(page).to have_content('Name can\'t be blank')

      fill_in 'Name', with: 'Georgie'
      fill_in 'Email', with: 'cgeorgie@gmail.com'
      fill_in 'Telephone', with: '231-123-4124'
      fill_in 'Mailing Address', with: 'Kyle\'s old friend'

      click_on 'Add Contact info'

      expect(page).not_to have_content('Name can\'t be blank')
      expect(page).to have_content('Thanks for adding your info!')

      georgie = Contact.find_by_name('Georgie')
      expect(georgie).to be_present
    end
  end
end
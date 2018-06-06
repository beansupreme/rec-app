require 'rails_helper'

def login_user(user)
  within '#new_user' do
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
  end

  click_button 'Log in'
end

describe 'Managing Contacts', type: :feature do
  let!(:bob) { User.create(email: 'bob@admin.com', password: 'Password!') }
  let!(:contacts) do
    [
      ['Alexander Ovechkin', 'ovy@caps.com', '888-888-8888', 'Cupless'],
      ['Evgeni Kuznetzov', 'birdman@caps.com', '929-292-9292', 'Bird nest'],
      ['Tom Wilson', 'dirty-player@caps.com', '434-343-4343', 'Penalty Box'],
      ['Seth Jones', 'seth@cbj.com', '333-333-3333', 'Nationwide Arena'],
    ].map do |contact_info|
     Contact.create!(name: contact_info[0], email: contact_info[1], 
      telephone: contact_info[2], mailing_address: contact_info[3]) 
   end
  end

  it 'requires a user to be logged in' do
    visit '/contacts' 

    expect(page).to have_content 'Log in'

    login_user(bob)

    expect(page).to have_content 'Listing Contacts'
  end

  it 'allows management of contacts', js: true do
    visit '/users/sign_in'

    login_user(bob)

    visit '/contacts'

    contacts_table = find(:table, 'Contacts')

    expect(contacts_table).to have_table_row(
      'Name' => 'Evgeni Kuznetzov', 'Email' => 'birdman@caps.com',
      'Telephone' => '929-292-9292', 'Mailing address' => 'Bird nest'
    )
    expect(contacts_table).to have_table_row(
      'Name' => 'Seth Jones', 'Email' => 'seth@cbj.com',
      'Telephone' => '333-333-3333', 'Mailing address' => 'Nationwide Arena'
    )

    expect(page).to have_content 'Alexander Ovechkin' 
    
    click_on 'Alexander Ovechkin'

    fill_in 'Mailing address', with: 'Stanley Cup Champion'

    click_on 'Update Contact'

    click_on 'Back'

    expect(page).to have_content 'Stanley Cup Champion' 

    click_on 'New Contact' 

    click_on 'Create Contact'

    expect(page).to have_content 'Name can\'t be blank'

    fill_in 'Name', with: 'Artemi Panarin'
    fill_in 'Email', with: 'Breadman@cbus.com'
    fill_in 'Telephone', with: '999-999-9999'
    fill_in 'Mailing address', with: 'LeVeque Tower'

    click_on 'Create Contact'

    visit '/contacts'
    expect(contacts_table).to have_table_row(
      'Name' => 'Artemi Panarin', 'Email' => 'Breadman@cbus.com'
    )

    expect(page).to have_content('Breadman')


    within(:table_row, {'Name' => 'Tom Wilson'}, {}) do
      click_on 'Destroy'
    end

    accept_alert 

    visit '/contacts'

    expect(page).not_to have_content('Tom Wilson')
  end

end
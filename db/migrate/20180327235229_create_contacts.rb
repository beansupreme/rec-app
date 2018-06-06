class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :telephone
      t.string :mailing_address

      t.timestamps null: false
    end
  end
end

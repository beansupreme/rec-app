Rec-app
=========
This is an app to improve interaction with a local recreaction center.

### About
This application runs on Rails 4.2.1 and Ruby 2.2.0, and depends on Postgresql as the database.
It is hosted on Heroku and can be seen at https://springfield-rec-app.herokuapp.com/

### Setup
If you would like to run the project locally, follow these steps:
1. Download [Postgresql](https://www.postgresql.org/) via a GUI or homebrew `brew install postgresql`

1. In a terminal, clone the repo with `git clone git@github.com:beansupreme/rec-app.git`

1. Navigate into the directory `cd rec-app` and run `bundle install`

1. Run migrations `rake db:migrate`

1. Start Rails Server `rails s`

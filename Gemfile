source 'https://rubygems.org'

# ruby 2.5.0

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# gem 'blacklight', '7.3.0'
gem 'blacklight', '7.7.0'

gem 'sprockets', '~> 3.7.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.8.1'

# Use sqlite3 as the database for Active Record
gem 'sqlite3'
gem "actionview", ">= 5.2.8.1"
# Use Puma as the app server
# gem 'puma', '~> 3.12'
gem "puma", ">= 5.6.4"
# Use SCSS for stylesheets
gem 'sassc-rails', '~> 2.1.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/discourse/mini_racer

gem 'mini_racer', "=0.4.0" 


gem "activerecord", ">= 5.2.4.5"

gem "activesupport", "~> 5.2.8.1"
gem "activestorage", "~> 5.2.8.1"
gem "rack", ">= 2.2.3"

gem "actionpack", ">= 5.2.8.1"

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
#gem 'turbolinks', '~> 5.1.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'xray-rails'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'jettywrapper'
gem 'devise','>= 4.7.1'
gem 'devise-guests'
gem 'devise_cas_authenticatable'
# enable link to static pages
gem 'high_voltage', '~> 3.0.0'
group :development, :test do
  gem 'solr_wrapper', '>= 0.3'
end

gem 'rsolr', '>= 1.0'
group :development, :test do
end

gem 'blacklight_range_limit', '~> 7.7.0'
gem 'bootstrap-slider-rails'
gem 'jquery-rails'
gem 'font-awesome-rails'
gem 'wicked_pdf'
gem 'wkhtmltopdf-binary', '0.12.6.7'
gem 'bootstrap', '~> 4.3.1'
# gem "bootstrap", ">= 4.3.1"
gem 'oai'
# Google Material Icons
gem 'material_icons'

gem "nokogiri", ">= 1.13.9"



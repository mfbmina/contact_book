FROM ruby:2.7

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle install
COPY . /app/backend

EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]

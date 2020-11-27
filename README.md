# README

We want a Frontend + Backend application that allows you to create, read, update and delete a list of contacts with the following requirements"

- Each contact will have: First name, Last name, Email, and phone number.
- All the fields are mandatory and there can’t be two contacts with the same email.
- You should be able to see the history of edits on those contacts.
- The contacts will be persisted in the database.

## Dependencies

- Ruby 2.7.2
- Gems listed on Gemfile
- Docker
- MySQL 5.7
- NodeJS 14.15.1

## Setup

1. `$ docker-compose build`
1. `$ docker-compose up`
1. `$ docker-compose exec backend rails db:create`
1. `$ docker-compose exec backend rails db:migrate`

And then visit `localhost`

## Decisions

- I wanna keep this code smaller and simple as possible.
- I'm using docker, so it is easier to setup the application everywhere.
- I'm using Rails because it gives me a lot of stuff out of box, like: ActiveRecord, routing, etc.
- I could have used ActiveRecord callbacks to create a history every time it is updated but I think having as a service is more readable and more extendable.

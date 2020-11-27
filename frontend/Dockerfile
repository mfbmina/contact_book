FROM node:14.15.1-alpine3.10

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

# Start the main process.
CMD ["npm", "run", "dev"]

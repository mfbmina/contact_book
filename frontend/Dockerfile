FROM node:14.15.1-alpine3.10

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

EXPOSE 3000

# Start the main process.
CMD ["npm", "run", "dev"]

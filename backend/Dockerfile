# dockerize strapi app
FROM node:16.3.0-alpine3.13

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 1337

CMD ["yarn", "dev"]



# dockerize strapi app
FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 1337

CMD ["yarn", "start"]



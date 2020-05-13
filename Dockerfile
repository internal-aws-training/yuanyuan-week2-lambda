FROM node:12.16-alpine

ENV NODE_ENV=production
WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install --production

COPY ./index.js .
COPY ./src ./src

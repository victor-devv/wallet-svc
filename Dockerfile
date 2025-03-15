FROM node:22.14.0-alpine as Base

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --no-cache make gcc g++ python3

RUN yarn

COPY . .

FROM node:22.14.0-alpine

WORKDIR /app

COPY --from=Base /app .

CMD [ "yarn", "start" ]

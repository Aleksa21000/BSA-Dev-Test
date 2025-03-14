FROM node:20.11.1-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run prod



FROM node:20.11.1-slim

RUN apt-get update && apt-get install -y php

WORKDIR /app

COPY --from=build /app /app

EXPOSE 8080 8000

CMD ["npm", "run", "dev"]

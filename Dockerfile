# Stage 1: Build
FROM node:10.15.3-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:production

# Stage 2: Serve
FROM nginx:1.15.9-alpine as nginx

COPY --from=node /usr/src/app/dist/uptime-portal /usr/share/nginx/html
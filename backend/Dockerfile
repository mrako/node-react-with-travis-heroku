FROM node:alpine

#RUN apk add --no-cache shadow

RUN apk add --no-cache bash postgresql-client zip 

RUN adduser -D docker_backend

RUN mkdir -p /usr/src/app
RUN chown docker_backend /usr/src/app 
USER docker_backend 
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app
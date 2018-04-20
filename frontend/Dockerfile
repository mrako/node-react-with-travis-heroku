FROM node:alpine

#RUN apk --no-cache add shadow

# Run this to prevent node-gyp related error when using Linux/Windows
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ 

RUN  apk del .gyp

RUN adduser -D docker_frontend
# Create app directory
RUN mkdir -p /usr/src/app
RUN chown docker_frontend /usr/src/app 
USER docker_frontend
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app/


#RUN addgroup -S docker_backend \
#    && adduser -S docker_backend -G docker_backend
#USER docker_frontend    

CMD npm run build

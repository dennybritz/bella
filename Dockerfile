FROM node:4.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g http-server

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 80
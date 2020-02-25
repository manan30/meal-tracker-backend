FROM node:latest

WORKDIR /usr/src/sculptor-backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1741:1741

CMD ["npm","start"]
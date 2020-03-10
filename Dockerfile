FROM node:latest

WORKDIR /usr/src/sculptor-backend

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build

EXPOSE 1741:1741

CMD ["npm", "run", "prod"]
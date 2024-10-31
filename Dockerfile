# Backend Dockerfile

FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install cors

COPY . .

EXPOSE 5000

# Correctly formatted CMD
CMD ["node", "server.js"]

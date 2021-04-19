FROM node:latest
RUN mkdir -p /src/app
WORKDIR /src/app
COPY COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "node", "app.js" ]
FROM node:18.14.2-alpine3.17

WORKDIR /app
COPY package.json package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
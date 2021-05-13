FROM node:14.12.0 as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD npm run start

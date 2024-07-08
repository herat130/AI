FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 6006
CMD ["npm", "run", "dev"]
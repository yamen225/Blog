FROM node:alpine
# to be removed
RUN apk --no-cache add curl
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
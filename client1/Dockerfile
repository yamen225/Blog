FROM node:alpine

WORKDIR /app

COPY package.json ./
RUN npm config set registry http://registry.npmjs.org/
RUN npm config set fetch-retry-maxtimeout 6000000
RUN npm config set fetch-retry-mintimeout 1000000

RUN yarn install --no-audit
COPY ./ ./

CMD ["npm", "start"]
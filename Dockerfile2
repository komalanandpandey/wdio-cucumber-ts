FROM node:16.14.2-alpine as base

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

FROM base as test
RUN npm install -g
COPY . .
CMD ["npm", "run", "tests"]
FROM node:16
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

ENV PORT $PORT
EXPOSE ${PORT}

CMD ["node", "dist/main"]
FROM node:18

WORKDIR /usr/src/app

COPY ./app/package.json .

RUN npm install

COPY ./app/index.js ./

EXPOSE 3333

CMD ["node", "index.js"]

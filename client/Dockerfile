FROM node:13.8.0

RUN mkdir /opt/exercise

WORKDIR /opt/exercise

COPY . .

RUN yarn install && yarn build

EXPOSE 3001

ENV PORT 3001

CMD yarn start

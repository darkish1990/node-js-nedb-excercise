FROM node:13.8.0

RUN mkdir /opt/exercise

WORKDIR /opt/exercise

COPY package*.json /

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start

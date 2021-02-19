FROM node:15.8.0

ENV TARGETHOST ""
ENV BASICAUTHTOKEN ""

RUN echo $TEST

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "server.js", "$TARGETHOST", "$BASICAUTHTOKEN"]

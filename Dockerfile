FROM node:18.19-alpine3.18

WORKDIR /opt/app

COPY ./dist ./

CMD [ "node", "server.js" ]


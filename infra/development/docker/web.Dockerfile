FROM node:20-alpine

WORKDIR /app

COPY web/package*.json ./

RUN npm install

COPY web ./

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
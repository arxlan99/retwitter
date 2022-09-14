FROM node:16.0.0

RUN npm install -g nodemon

WORKDIR /app

COPY /server/package.json .

RUN npm install

COPY /server .

EXPOSE 4000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"]
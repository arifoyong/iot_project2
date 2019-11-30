FROM node:12.13.1-alpine3.9

RUN apk update && \
  apk add netcat-openbsd
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install sequelize-cli -g
# RUN npm install
# # add entrypoint.sh
# COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
# RUN chmod +x /usr/src/app/entrypoint.sh
# COPY . .

CMD ["/usr/src/app/entrypoint.sh"]

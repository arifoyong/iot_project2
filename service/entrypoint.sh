#!/bin/sh
echo "Waiting for MYSQL"

while ! nc -z iot-mysql 3306; do
  sleep 1
done

echo "MYSQL started"

npm run start-dev
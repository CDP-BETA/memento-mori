FROM nginx:1.19.0-alpine

ADD default.conf /etc/nginx/conf.d/default.conf
ADD build /app/public

EXPOSE 80

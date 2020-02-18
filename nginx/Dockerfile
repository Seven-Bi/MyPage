FROM nginx:latest


COPY nginx.conf /etc/nginx/nginx.conf
COPY html /usr/share/nginx/html
COPY static /usr/share/nginx/static

EXPOSE 80
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]
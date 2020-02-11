FROM ubuntu:18.04


RUN apt-get update
RUN apt-get -y install software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get -y install nginx && apt-get -y install python3.7


ENV PYTHONUNBUFFERED 1
RUN mkdir /home/code
WORKDIR /home/code
COPY . /home/code/

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY html /usr/share/nginx/html
COPY static /usr/share/nginx/static

EXPOSE 80
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]
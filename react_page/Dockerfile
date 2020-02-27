FROM ubuntu:18.04

RUN apt-get update && \
	apt-get install -y locales locales-all

ENV LC_ALL en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

RUN apt-get update && \
	apt-get -y install sudo && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash - && \
    apt-get -y install -y nodejs

RUN apt-get install -y nginx
	

RUN mkdir /home/code
WORKDIR /home/code
COPY . .
RUN npm install --no-optional
RUN npm run build
COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 3000
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]
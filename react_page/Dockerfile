FROM node:latest


RUN apt-get update
RUN apt-get install -y locales locales-all
ENV LC_ALL en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

RUN mkdir /home/code
WORKDIR /home/code
COPY package.json .
RUN npm install
COPY . ./

EXPOSE 3000
CMD ["npm", "start"]
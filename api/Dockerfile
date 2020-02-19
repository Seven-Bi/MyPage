FROM ubuntu:18.04


RUN apt-get update
RUN apt-get -y install software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update
RUN apt-get -y install python3.6
RUN apt-get -y install python3-pip

ENV PYTHONUNBUFFERED 1
RUN mkdir /home/code
COPY . /home/code/
WORKDIR /home/code/
RUN pip3 install --no-cache-dir -r requirements.txt
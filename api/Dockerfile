FROM ubuntu:18.04


RUN apt-get update && \
	apt-get install -y locales locales-all
ENV LC_ALL en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8


RUN apt-get -y install software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update
RUN apt-get -y install python3.6
RUN apt-get -y install python3-pip

ENV PYTHONUNBUFFERED 1
RUN mkdir /home/code
RUN mkdir /home/static
COPY . /home/code/
WORKDIR /home/code/
RUN pip3 install --no-cache-dir -r requirements.txt
RUN python3 my_api/manage.py collectstatic --noinput


RUN apt-get update
RUN apt-get install -y nginx
COPY nginx.conf /etc/nginx/nginx.conf	

EXPOSE 81
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]
FROM python:3.8


ENV PYTHONUNBUFFERED 1
ENV API_DIR /api

RUN mkdir -p /var/log/gunicorn
RUN mkdir $API_DIR
WORKDIR $API_DIR

ADD requirements.txt $API_DIR/
RUN pip install --no-cache-dir -r requirements.txt
ADD my_api $API_DIR/
RUN python manage.py migrate
COPY . $API_DIR/
# Gunicorn configuration file
import multiprocessing


bind = '0.0.0.0:8000'
reload = 'True'
deamon = 'True'
accesslog = '/var/log/gunicorn/gunicorn-access.log'
errorlog = '/var/log/gunicorn/gunicorn-error.log'
loglevel = 'info'
workers = multiprocessing.cpu_count() * 2 + 1
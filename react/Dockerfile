FROM node:latest AS builder


RUN mkdir /node
WORKDIR /node
COPY . .
RUN npm install --no-optional
RUN npm install @material-ui/core
RUN npm install @material-ui/icons
RUN npm run build


FROM nginx:latest

RUN mkdir /home/code
WORKDIR /home/code
RUN chown -R nginx:nginx /home/code

COPY --from=builder /node .
ADD /src/static/* ./build/static/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
FROM node:16.15.0 as build-stage
WORKDIR /var/jenkins_home/workspace/b107/Front
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/conf.d/default

RUN mkdir /app
WORKDIR /app
RUN mkdir ./dist

COPY --from=build-stage /var/jenkins_home/workspace/b107/Front/dist ./dist
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 3000
CMD ["nginx", "-g","daemon off;"]
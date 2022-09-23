FROM node:16.15.0 as build-stage
WORKDIR /var/jenkins_home/workspace/b107/Front
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /var/jenkins_home/workspace/b107/Front/dist /usr/share/nginx/html
COPY --from=build-stage /var/jenkins_home/workspace/b107/Front/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g","daemon off;"]
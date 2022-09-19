FROM openjdk:8-jdk-alpine
ARG JAR_FILE=./build/libs/purgae-0.0.1-SNAPSHOT.jar
WORKDIR /var/jenkins_home/workspace/b107/back
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
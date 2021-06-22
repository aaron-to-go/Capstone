FROM openjdk:16

MAINTAINER capstone <contact.me@aaron-dutschmann.com>

ADD /backend/target/capstone.jar capstone.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$SPRING_DATA_MONGODB_URI -jar /capstone.jar" ]

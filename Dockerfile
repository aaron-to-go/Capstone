FROM openjdk:16

MAINTAINER capstone <contact.me@aaron-dutschmann.com>

ADD /backend/target/capstone.jar capstone.jar

CMD [ "sh", "-c", "java -jar /capstone.jar" ]

docker exec -it poc-kafka-streams-kafka-1 bash

# create a new topic
usr/bin/kafka-topics --create --topic create-lead --bootstrap-server localhost:9092
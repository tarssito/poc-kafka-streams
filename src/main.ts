import { KafkaStreams } from 'kafka-streams'
import { kafkaStreamsConfig } from './config'

const factory = new KafkaStreams(kafkaStreamsConfig)

const kstream = factory.getKStream('create-lead')

kstream
  .from('create-lead')
  .mapJSONConvenience() //{key: Buffer, value: Buffer} -> {key: string, value: Object}
  .forEach((message) => console.log(message.value))

kstream.start().then(
  () => {
    console.log('stream started, as kafka consumer is ready.')
  },
  (error) => {
    console.log('streamed failed to start: ' + error)
  }
)

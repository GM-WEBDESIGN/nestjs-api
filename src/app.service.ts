import { Injectable, Inject } from '@nestjs/common';
import { Subscribe, Payload, Topic, MqttService } from 'nest-mqtt';

@Injectable()
export class AppService {
  constructor(@Inject(MqttService) private readonly mqttService: MqttService) {}

  @Subscribe({
    topic: 'esp322/th',
    transform: payload => payload.toString(),
  })
  garageTemp(@Payload() payload) {
    const [temp, hum] = JSON.parse(payload);
    console.log(`Temp: ${temp}°C & Humidity: ${hum}%`);
  }

  async publishNotification(to: string, text: any) {
    this.mqttService.publish('notifications/' + to, text);
  }

  //   myClient: MqttClient;
  //   constructor(@Inject('MQTT_BROKER') private client: MqttClient) {
  //     this.myClient = this.client;
  //   }
  //   subscribeTopic(topic: string) {
  //     this.myClient.subscribe(topic, data => {
  //       console.log('Get data => ', data);
  //     });
  //   }
  //   emitData(topic: string, data: string) {
  //     this.myClient.emit(topic, data);
  //     return true;
  //   }
}

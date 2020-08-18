import { Module } from '@nestjs/common';
import { ImageModule } from './image/image.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MqttModule, MqttModuleOptions } from 'nest-mqtt';

const mqttOptions: MqttModuleOptions = {
  clientId: 'NestJS',
  host: '192.168.1.63',
  port: 1883,
};

@Module({
  imports: [
    ImageModule,
    TypegooseModule.forRoot('mongodb://localhost:27017/imageapi', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MqttModule.forRoot(mqttOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

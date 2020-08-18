import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { INestMicroservice } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // const app: INestMicroservice = await NestFactory.createMicroservice(
  //   AppModule,
  //   {
  //     transport: Transport.MQTT,
  //     options: {
  //       host: 'mqtt://192.168.1.63',
  //       port: 1883,
  //       clientId: 'NestJS',
  //     },
  //   },
  // );
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'public'));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

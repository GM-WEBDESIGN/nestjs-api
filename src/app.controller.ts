import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getData() {
    const data = new Date().toLocaleTimeString();
    let id = new Date().getTime().toString();
    let result = await this.appService.publishNotification(id, data);

    return data;
  }
}

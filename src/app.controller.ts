import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//your-domain-name/
//if your-domain-name/users then get needs to have 'users' as param in get
//if your-domain-name/products/users would also need 'products as param in controller
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

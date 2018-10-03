import { Get, Post, Body, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { ExampleDataService } from './example-data.service';
import { AuthDto } from 'models/auth';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly exampleDataService: ExampleDataService,
  ) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Post('login')
  login(@Body() authCred: AuthDto) {
    this.authService.login(authCred);
  }

  @Post('signup')
  signup(@Body() authCred: AuthDto) {
    this.authService.signup(authCred);
  }

  @Get('api/v1/example')
  exampleData(): { [key: string]: any } {
    return this.exampleDataService.exampleData();
  }
}

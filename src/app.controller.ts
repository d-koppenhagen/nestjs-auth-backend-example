import { Get, Post, Body, Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';

import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { ExampleDataService } from './example-data.service';
import { AuthDto } from 'models/auth';
import { LoginDto } from 'models/login';
import { UserDto } from 'models/user';

@ApiUseTags('api/v1')
@Controller('api/v1')
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
  async login(@Body() authCred: LoginDto): Promise<AuthDto> {
    return await this.authService.createToken(authCred);
  }

  @Post('signup')
  async signup(@Body() signupCred: UserDto): Promise<AuthDto> {
    return await this.authService.createToken(signupCred);
  }

  @Get('example')
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  exampleData(): { [key: string]: any } {
    return this.exampleDataService.exampleData();
  }
}

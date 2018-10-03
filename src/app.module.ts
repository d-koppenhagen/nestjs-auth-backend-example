import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { ExampleDataService } from './example-data.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AuthService, ExampleDataService],
})
export class AppModule {}

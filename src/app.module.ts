import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { ExampleDataService } from './example-data.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'bsdf80r34ufbofrgonf93rpfp9r3',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [AppController],
  providers: [JwtStrategy, AppService, AuthService, ExampleDataService],
})
export class AppModule {}

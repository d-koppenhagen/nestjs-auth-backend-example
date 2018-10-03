import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthDto } from './models/auth';
import { LoginDto } from 'models/login';
import { UserDto } from 'models/user';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(authCred: LoginDto | UserDto): Promise<AuthDto> {
    const user = {
      email: authCred.email,
      password: authCred.password,
    };
    const accessToken = this.jwtService.sign(user);
    return new AuthDto(accessToken, 3600, user.email);
  }

  signup(authCred: AuthDto): boolean {
    return true;
  }

  async validateUser(payload: UserDto): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return {};
  }
}

import { Injectable } from '@nestjs/common';
import { AuthDto } from 'models/auth';

@Injectable()
export class AuthService {
  login(authCred: AuthDto): boolean {
    return true;
  }

  signup(authCred: AuthDto): boolean {
    return true;
  }
}

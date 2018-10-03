import { ApiModelProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiModelProperty()
  token: string;

  @ApiModelProperty()
  tokenExpires: number;

  @ApiModelProperty()
  email: string;

  constructor(
    token: string,
    tokenExpires: number,
    email: string,
  ){
    this.token = token;
    this.tokenExpires = tokenExpires;
    this.email = email;
  }
}

import { ApiModelProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiModelProperty()
  readonly token: string;

  @ApiModelProperty()
  readonly tokenExpires: number;

  @ApiModelProperty()
  readonly user: string;
}

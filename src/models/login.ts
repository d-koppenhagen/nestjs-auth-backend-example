import { ApiModelProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly password: string;
}

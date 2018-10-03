import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiModelProperty()
  readonly email?: string;

  @ApiModelProperty()
  readonly fristname?: string;

  @ApiModelProperty()
  readonly lastname?: string;

  @ApiModelProperty()
  readonly password?: string;
}

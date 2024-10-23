import { PartialType } from "@nestjs/mapped-types";
import { LoginAuthDto } from "src/auth/dto/login-auth.dto";

export class CreateUserDto extends PartialType(LoginAuthDto) {
  name: string;
}

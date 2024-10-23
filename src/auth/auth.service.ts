import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOneByEmail(username);

    if (!user) {
      throw new UnauthorizedException('Usuário ou Senha Inválidos');
    }

    if (user.password === password) {
      return await this.gerarToken(user);
    }

    throw new UnauthorizedException('Usuário ou Senha Inválidos');
  }

  async gerarToken(payload: User) {
    return {
      access_token: this.jwtService.sign(
        { email: payload.email }
      ),
    };
  }
}

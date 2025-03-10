import {Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async login(@Body() client: LoginDto) {
    return this.authService.login(client.email, client.password);
  }
}

import { AuthService } from './auth.service';
import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
  @Post()
  postAuth(): string {
    return this.authService.postAuth();
  }

  @Get()
  getAuth(): string {
    return this.authService.getAuth();
  }
  

  @Put()
  putAuth(): string {
    return this.authService.putAuth();
  }
}

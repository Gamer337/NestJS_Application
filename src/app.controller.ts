import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req){
    return this.authService.login( req.user ); // TODO: return JWT Token 
  }

  // @UseGuards(AuthenticatedGuard) //Only used at times of Sessions

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getHello(@Request() req) {
    return req.user; // TODO: access Bearer Token, and Validate Token
  }
}

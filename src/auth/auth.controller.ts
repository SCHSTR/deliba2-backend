import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { discordUser, appUser } from './dto/discordUser.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register/discord')
  registerFromDiscord(@Body() discordUser: discordUser){
    return this.authService.registerFromDiscord(discordUser)
  }

  @Post('/register/app')
  registerFromApp(@Body() appUser: appUser ){
    return this.authService.registerFromApp(appUser)
  }
}

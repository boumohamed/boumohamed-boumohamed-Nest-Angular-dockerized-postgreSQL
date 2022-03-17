import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {


    constructor(private auth : AuthService)
    {

    }

    @Post('signup')
    signup(@Body() dto : AuthDto){

       return this.auth.signup(dto);
    }

    @Post('signin')
    signin(@Body() dto : AuthDto){
      return this.auth.signin(dto);
    }

    @Get('user')
    user(){
      return this.auth.getUser();
    }
}

/*
@Post('signin')
    signin(@Req() req : Request){
      console.log(req.body)
       return this.auth.signin();
    }
*/

import { Body, Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    constructor(private data : UserService) {}

    @Delete('supprimer/:id')
    supprimer(@Param('id', ParseIntPipe) id : number)
    {
        return this.data.supprimer(id)
    }
    @Get('me')
    getMe()
    {
        return 'user info'
    }

}

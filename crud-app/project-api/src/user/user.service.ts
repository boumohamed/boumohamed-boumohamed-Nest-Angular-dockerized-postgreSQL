import { Body, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma : PrismaService){
        
    }
    
    async supprimer(id : number)
    {
        const user = await this.prisma.user.findUnique({
            where : {
                id: id
            }
        })
        if(!user) throw new ForbiddenException('user not found ')

        await this.prisma.user.delete({
            where : {
                id:id
            }
        })
        return user;
    }
}

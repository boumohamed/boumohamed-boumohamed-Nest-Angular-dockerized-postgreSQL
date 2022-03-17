import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { threadId } from 'worker_threads';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class AuthService {
    constructor(private prisma : PrismaService,
                private jwt : JwtService,
                private config : ConfigService){
        
    }
   async signup(dto : AuthDto){

        const hash = await argon.hash(dto.password)

        try{
            const user = await this.prisma.user.create({
                data : {
                    email : dto.email,
                    password : hash,
                }
            })
            
    
            return this.signToken(user.id, user.email);
        }catch(error)
        {
            if(error instanceof  PrismaClientKnownRequestError){
                if(error.code === 'P2002') {
                    // unique fielde error code
                    throw new ForbiddenException('email deja existe')
                }
            }
            throw error
        }
    }

   async signin(dto : AuthDto){
        
        const user = await this.prisma.user.findUnique({
            where : {
                email: dto.email
            }
        })

        if(!user) throw new ForbiddenException('email mismatched')

        const pwValide = await argon.verify(user.password,dto.password)

        if(!pwValide) throw new ForbiddenException('password mismatched')

        

        return this.signToken(user.id, user.email);
    }
   async getUser()
    {
        const user = await this.prisma.user.findMany()
        return user
    }

    async signToken(userId:number, email: string) : Promise<{access_token: string}>
    {
        const payload = {
            sub: userId,
            email
        }

        const jwtSecret = this.config.get('JWT_SERCRET')

        const token = await this.jwt.signAsync(payload, {
                expiresIn: "10m",
                secret: jwtSecret
            });
        
        
        return {access_token : token}
    }
}

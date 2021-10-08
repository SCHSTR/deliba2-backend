import { Injectable } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';
const prisma = new PrismaClient()

@Injectable()
export class TrackService {

    async discordTrack(discordData){
        console.log('🏃‍♂️')
        const checkUser = await prisma.user.findFirst({
            where: {discordId: discordData.id}
        })

        if(checkUser === null) return {
            authorized: false,
            action: 'error',
            message: `Parece que o usuário não está cadastrado`,
            status: 400
        }

        // const query = await prisma.package.create({
        //     data: {
        //         codigo: '',
        //         owner: checkUser.discordId,
        //         apelido: '',
        //         status: '',
        //         local: '',
        //         observacao: '',
        //         data: '',
        //         hora: '',
        //     }
        // })
        
        //return checkUser.email
        return {authorized: true}
    }

}

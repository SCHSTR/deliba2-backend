import { PrismaClient } from '.prisma/client';
import { Injectable } from '@nestjs/common';

const sha256 = require('sha256')

@Injectable()
export class AuthService {

  async registerFromDiscord(discordData){
    try {
      const prisma = new PrismaClient()
      const user = await prisma.user.create({
        data: {
          email: discordData.email,
          discordId: discordData.discordId,
        },
      })
      return {message: `Usuário criado com sucesso!`, data: user}    
    } catch (error) { return {status: 403, message: `E-mail já cadastrado`, data: error} }
    
  }

  async registerFromApp(appUser){

    const prisma = new PrismaClient()
    const validateEmail = await prisma.user.findFirst({
      where: {email: appUser.email}
    })

    if(!validateEmail){

      const user = await prisma.user.create({
        data: {
          email: appUser.email,
          password: sha256(appUser.password).toUpperCase(),
          name: appUser.name,
          surname: appUser.surname,
          bday: appUser.bday,
          accountType: appUser.accountType
        }
      })

      return {
        message: `Usuário criado com sucesso!`,
        data: {
          email: appUser.email,
          name: appUser.name,
          surname: appUser.surname,
          bday: appUser.bday,
          accountType: appUser.accountType
        }
      }
    }

    const user = await prisma.user.update({
      where: {email: appUser.email},
      data: {
        email: appUser.email,
        password: sha256(appUser.password).toUpperCase(),
        name: appUser.name,
        surname: appUser.surname,
        bday: appUser.bday,
        accountType: appUser.accountType
      }
    })

    return {
      message: `Usuário criado com sucesso!`,
      data: {
        email: appUser.email,
        name: appUser.name,
        surname: appUser.surname,
        bday: appUser.bday,
        accountType: appUser.accountType
      }
    }
  }

}

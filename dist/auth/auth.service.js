"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const client_1 = require(".prisma/client");
const common_1 = require("@nestjs/common");
const sha256 = require('sha256');
let AuthService = class AuthService {
    async registerFromDiscord(discordData) {
        try {
            const prisma = new client_1.PrismaClient();
            const user = await prisma.user.create({
                data: {
                    email: discordData.email,
                    discordId: discordData.discordId,
                },
            });
            return { message: `Usuário criado com sucesso!`, data: user };
        }
        catch (error) {
            return { message: `E-mail já cadastrado`, data: error };
        }
    }
    async registerFromApp(appUser) {
        const prisma = new client_1.PrismaClient();
        const validateEmail = await prisma.user.findFirst({
            where: { email: appUser.email }
        });
        if (!validateEmail) {
            const user = await prisma.user.create({
                data: {
                    email: appUser.email,
                    password: sha256(appUser.password).toUpperCase(),
                    name: appUser.name,
                    surname: appUser.surname,
                    bday: appUser.bday,
                    accountType: appUser.accountType
                }
            });
            return {
                message: `Usuário criado com sucesso!`,
                data: {
                    email: appUser.email,
                    name: appUser.name,
                    surname: appUser.surname,
                    bday: appUser.bday,
                    accountType: appUser.accountType
                }
            };
        }
        const user = await prisma.user.update({
            where: { email: appUser.email },
            data: {
                email: appUser.email,
                password: sha256(appUser.password).toUpperCase(),
                name: appUser.name,
                surname: appUser.surname,
                bday: appUser.bday,
                accountType: appUser.accountType
            }
        });
        return {
            message: `Usuário criado com sucesso!`,
            data: {
                email: appUser.email,
                name: appUser.name,
                surname: appUser.surname,
                bday: appUser.bday,
                accountType: appUser.accountType
            }
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
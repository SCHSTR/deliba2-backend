"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RastreioService = void 0;
require('dotenv').config();
const common_1 = require("@nestjs/common");
const correios_brasil_1 = require("correios-brasil");
const axios_1 = require("axios");
let RastreioService = class RastreioService {
    async getCorreios(trackCode) {
        if (trackCode.length != 13)
            return `Este código não parece ser um código valido para os Correios, verifique e tente novamente`;
        this.query = await (0, correios_brasil_1.rastrearEncomendas)([trackCode]);
        const result = this.query.pop();
        if (result.length == 0)
            return `Parece que a encomenda não existe mais ou não foi encontrada no sistema do Correios`;
        return {
            trackCode: trackCode,
            data: result.pop()
        };
    }
    async getKangu(trackCode) {
        if (trackCode.length != 15)
            return `Este código não parece ser um código valido para a Kangu, verifique e tente novamente`;
        this.query = await axios_1.default.get(`https://portal.kangu.com.br/tms/transporte/rastrear/${trackCode}`, { headers: { token: process.env.KANGU_TOKEN } });
        console.log(this.query.data.situacao);
        return {
            trackCode: trackCode,
            data: this.query.data.situacao
        };
    }
    async getUps(trackCode) {
        return {
            status: 404,
            message: 'Content unavailable right now'
        };
    }
};
RastreioService = __decorate([
    (0, common_1.Injectable)()
], RastreioService);
exports.RastreioService = RastreioService;
//# sourceMappingURL=rastreio.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RastreioController = void 0;
const common_1 = require("@nestjs/common");
const rastreio_service_1 = require("./rastreio.service");
let RastreioController = class RastreioController {
    constructor(rastreioService) {
        this.rastreioService = rastreioService;
    }
    getCorreios(trackCode) {
        return this.rastreioService.getCorreios(trackCode);
    }
    getKangu(trackCode) {
        return this.rastreioService.getKangu(trackCode);
    }
    getUps(trackCode) {
        return this.rastreioService.getUps(trackCode);
    }
};
__decorate([
    (0, common_1.Get)('/correios/:trackCode'),
    __param(0, (0, common_1.Param)('trackCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RastreioController.prototype, "getCorreios", null);
__decorate([
    (0, common_1.Get)('/kangu/:trackCode'),
    __param(0, (0, common_1.Param)('trackCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RastreioController.prototype, "getKangu", null);
__decorate([
    (0, common_1.Get)('/ups/:trackCode'),
    __param(0, (0, common_1.Param)('trackCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RastreioController.prototype, "getUps", null);
RastreioController = __decorate([
    (0, common_1.Controller)('rastreio'),
    __metadata("design:paramtypes", [rastreio_service_1.RastreioService])
], RastreioController);
exports.RastreioController = RastreioController;
//# sourceMappingURL=rastreio.controller.js.map
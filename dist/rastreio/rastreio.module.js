"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RastreioModule = void 0;
const common_1 = require("@nestjs/common");
const rastreio_service_1 = require("./rastreio.service");
const rastreio_controller_1 = require("./rastreio.controller");
let RastreioModule = class RastreioModule {
};
RastreioModule = __decorate([
    (0, common_1.Module)({
        controllers: [rastreio_controller_1.RastreioController],
        providers: [rastreio_service_1.RastreioService]
    })
], RastreioModule);
exports.RastreioModule = RastreioModule;
//# sourceMappingURL=rastreio.module.js.map
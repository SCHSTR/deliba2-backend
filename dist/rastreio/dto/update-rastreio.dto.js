"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRastreioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_rastreio_dto_1 = require("./create-rastreio.dto");
class UpdateRastreioDto extends (0, mapped_types_1.PartialType)(create_rastreio_dto_1.CreateRastreioDto) {
}
exports.UpdateRastreioDto = UpdateRastreioDto;
//# sourceMappingURL=update-rastreio.dto.js.map
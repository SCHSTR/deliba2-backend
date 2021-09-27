import { PartialType } from '@nestjs/mapped-types';
import { CreateRastreioDto } from './create-rastreio.dto';

export class UpdateRastreioDto extends PartialType(CreateRastreioDto) {}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RastreioService } from './rastreio.service';
import { CreateRastreioDto } from './dto/create-rastreio.dto';
import { UpdateRastreioDto } from './dto/update-rastreio.dto';

@Controller('rastreio')
export class RastreioController {
  constructor(private readonly rastreioService: RastreioService) {}

  @Get('/correios/:trackCode')
  getCorreios(@Param('trackCode') trackCode: string){
    return this.rastreioService.getCorreios(trackCode)
  }

  @Get('/kangu/:trackCode')
  getKangu(@Param('trackCode') trackCode: string){
    return this.rastreioService.getKangu(trackCode)
  }

  @Get('/ups/:trackCode')
  getUps(@Param('trackCode') trackCode: string){
    return this.rastreioService.getUps(trackCode)
  }

}

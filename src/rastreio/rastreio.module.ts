import { Module } from '@nestjs/common';
import { RastreioService } from './rastreio.service';
import { RastreioController } from './rastreio.controller';

@Module({
  controllers: [RastreioController],
  providers: [RastreioService]
})
export class RastreioModule {}

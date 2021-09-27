import { Test, TestingModule } from '@nestjs/testing';
import { RastreioController } from './rastreio.controller';
import { RastreioService } from './rastreio.service';

describe('RastreioController', () => {
  let controller: RastreioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RastreioController],
      providers: [RastreioService],
    }).compile();

    controller = module.get<RastreioController>(RastreioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

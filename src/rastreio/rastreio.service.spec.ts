import { Test, TestingModule } from '@nestjs/testing';
import { RastreioService } from './rastreio.service';

describe('RastreioService', () => {
  let service: RastreioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RastreioService],
    }).compile();

    service = module.get<RastreioService>(RastreioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

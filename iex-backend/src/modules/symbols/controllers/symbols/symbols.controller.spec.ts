import { Test, TestingModule } from '@nestjs/testing';
import { SymbolsController } from './symbols.controller';

describe('SymbolsController', () => {
  let controller: SymbolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SymbolsController],
    }).compile();

    controller = module.get<SymbolsController>(SymbolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

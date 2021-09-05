import { Test, TestingModule } from '@nestjs/testing';
import { QuoteGateway } from './quote.gateway';

describe('QuoteGateway', () => {
  let gateway: QuoteGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteGateway],
    }).compile();

    gateway = module.get<QuoteGateway>(QuoteGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

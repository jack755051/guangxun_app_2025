import { Test, TestingModule } from '@nestjs/testing';
import { MockCardService } from './mock-card.service';

describe('MockCardService', () => {
  let service: MockCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockCardService],
    }).compile();

    service = module.get<MockCardService>(MockCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

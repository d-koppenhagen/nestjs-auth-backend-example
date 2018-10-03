import { Test, TestingModule } from '@nestjs/testing';
import { ExampleDataService } from './example-data.service';

describe('ExampleDataService', () => {
  let service: ExampleDataService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleDataService],
    }).compile();
    service = module.get<ExampleDataService>(ExampleDataService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

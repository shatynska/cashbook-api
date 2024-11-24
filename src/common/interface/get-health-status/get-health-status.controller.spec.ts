import { Test, TestingModule } from '@nestjs/testing';
import { GetHealthStatusController } from './get-health-status.controller';

describe('Health Controller', () => {
  let controller: GetHealthStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetHealthStatusController],
    }).compile();

    controller = module.get<GetHealthStatusController>(
      GetHealthStatusController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

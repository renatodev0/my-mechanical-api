import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { FipeService } from '@shared/fipe.service';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService, FipeService],
})
export class VehicleModule {}

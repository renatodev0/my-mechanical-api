import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { FipeService } from '@shared/fipe.service';
import { PrismaService } from '@shared/prisma.service';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService, FipeService, PrismaService],
})
export class VehicleModule {}

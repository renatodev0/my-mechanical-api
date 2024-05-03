import { Controller, Get, Query } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { GetVehiclesDto } from './dto/vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Get('brands')
  async getBrands() {
    return await this.vehicleService.getBrands();
  }

  @Get('models')
  async getModels(@Query() data: GetVehiclesDto) {
    return await this.vehicleService.getVehiclesByBrand(data);
  }
}

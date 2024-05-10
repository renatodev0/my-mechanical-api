import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto, GetVehiclesDto } from './dto/vehicle.dto';
import { FirebaseAuthGuard } from '../auth/auth.guard';

@Controller('vehicle')
@UseGuards(FirebaseAuthGuard)
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

  @Post()
  async createVehicle(@Body() createVehicleDto: CreateVehicleDto) {
    return await this.vehicleService.newVehicle(createVehicleDto);
  }

  @Get(':id')
  async getVehicle(@Param('id') id: string) {
    return await this.vehicleService.getVehicle(id);
  }

  @Get('owner/:ownerId')
  async getVehiclesByOwner(@Param('ownerId') ownerId: string) {
    return await this.vehicleService.getVehiclesByOwner(ownerId);
  }

  @Put(':id')
  async updateVehicle(
    @Param('id') id: string,
    @Body() updateVehicleDto: Partial<CreateVehicleDto>,
  ) {
    return await this.vehicleService.updateVehicle(id, updateVehicleDto);
  }

  @Delete(':id')
  async deleteVehicle(@Param('id') id: string) {
    return await this.vehicleService.deleteVehicle(id);
  }
}

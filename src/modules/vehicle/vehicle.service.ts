import { Injectable } from '@nestjs/common';
import {
  GetVehiclesDto,
  ReturnBrandsDto,
  ReturnVehiclesDto,
} from './dto/vehicle.dto';
import { FipeService } from '@shared/fipe.service';
import { AxiosInstance } from 'axios';

@Injectable()
export class VehicleService {
  private fipeInstance: AxiosInstance;

  constructor(private fipeService: FipeService) {
    this.fipeInstance = fipeService.getAxiosInstance();
  }

  async getBrands(): Promise<ReturnBrandsDto[]> {
    const { data }: { data: { Label: string; Value: string }[] } =
      await this.fipeInstance.post(
        'veiculos/ConsultarMarcas',
        {
          codigoTipoVeiculo: '1',
          codigoTabelaReferencia: '308',
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

    return data.map((brand) => ({
      id: brand.Value,
      name: brand.Label,
    }));
  }

  async getVehiclesByBrand(
    dataGet: GetVehiclesDto,
  ): Promise<ReturnVehiclesDto> {
    const {
      data: { Anos: Years, Modelos: Models },
    }: {
      data: {
        Modelos: { Label: string; Value: string }[];
        Anos: { Label: string; Value: string }[];
      };
    } = await this.fipeInstance.post('veiculos/ConsultarModelos', {
      codigoTipoVeiculo: 1,
      codigoTabelaReferencia: 309,
      codigoModelo: dataGet.modelCode,
      codigoMarca: dataGet.brandCode,
      ano: dataGet.year,
      codigoTipoCombustivel: dataGet.fuelTypeCode,
      anoModelo: dataGet.modelYear,
      modeloCodigoExterno: dataGet.externalModelCode,
    });

    return {
      Years: Years.map((year) => ({
        id: year.Value,
        name: year.Label,
      })),
      Models: Models.map((model) => ({
        id: model.Value,
        name: model.Label,
      })),
    };
  }
}

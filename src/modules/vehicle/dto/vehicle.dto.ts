export interface ReturnBrandsDto {
  id: string;
  name: string;
}

export interface ReturnVehiclesDto {
  Years: {
    id: string;
    name: string;
  }[];
  Models: {
    id: string;
    name: string;
  }[];
}

export interface GetVehiclesDto {
  vehicleTypeCode?: string;
  referenceTableCode?: string;
  modelCode?: string;
  brandCode: string;
  year?: string;
  fuelTypeCode?: string;
  modelYear?: string;
  externalModelCode?: string;
}

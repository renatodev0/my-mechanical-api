import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class FipeService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://veiculos.fipe.org.br/api/',
    });
  }

  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

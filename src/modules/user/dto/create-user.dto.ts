export interface ICreateUserDto {
  id?: number;
  name: string;
  email: string;
  password: string;
  type: 'Owner' | 'Mechanic';
  workshopId?: string;
  vehicles?: string[];
}

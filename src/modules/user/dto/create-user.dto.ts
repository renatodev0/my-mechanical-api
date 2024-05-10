export interface ICreateUserDto {
  id?: string;
  name: string;
  email: string;
  password: string;
  type: 'Owner' | 'Mechanic';
  workshopId?: string;
  vehicles?: string[];
}

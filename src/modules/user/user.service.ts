import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/prisma.service';
import { AuthService } from '../auth/auth.service';
import { ICreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async register(user: ICreateUserDto) {
    try {
      await this.authService.register(user.email, user.password);
      const createdUser = await this.prismaService.user.create({
        data: user,
      });

      return createdUser;
    } catch (error) {
      throw error;
    }
  }
}

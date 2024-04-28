import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { PrismaService } from '@shared/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthService, PrismaService],
  imports: [AuthModule],
})
export class UserModule {}
